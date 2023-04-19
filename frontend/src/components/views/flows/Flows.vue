<script setup>
import FlowPreview from './FlowPreview.vue'
import FlowModal from './FlowModal.vue'

import RemoveFlowModal from './RemoveFlowModal.vue'
import EditFlowModal from './EditFlowModal.vue'

import NavBottom from '../../layout/NavBottom.vue'


import { monthNames } from '../../../services/formatDate'
import { ref } from 'vue';
import { flows as flowData } from '../../../mockData'
import DateSwitcher from '../../inputs/DateSwitcher.vue'

const activeFlow = ref(null)
const flows = ref([])

flows.value = flowData

const flowForRemoval = ref(null)
const flowForEdit = ref(null)

const editModalData = ref(null)

const displayedFlows = ref([])

const selectedDate = ref(null)

function cancelRemoveFlow() {
  flowForRemoval.value = null
}

function removeFlow() {
  let date, i
  for(let _date of Object.keys(flows.value)){
    i = 0
    
    for(let flow of flows.value[_date]){
      if(flow.id == flowForRemoval.value.id){
        date = _date
        break
      }
      else i++
    }

    if(date) break
  }

  flows.value[date].splice(i, 1)

  if(flows.value[date].length == 0)
    delete flows.value[date]

  flowForRemoval.value = null
  activeFlow.value = null
}

function openEditFlowModal(flow) {
  flowForEdit.value = flow

  editModalData.value = {
    id: flow.id,
    title: flow.title,
    description: flow.description,
    emotions: [...flow.emotions]
  }
}

function openRemoveFlowModal(flow){
  flowForRemoval.value = flow
}

function cancelEditFlow() {
  flowForEdit.value = null
  editModalData.value = null
}

function editFlow(editedFlow) {
  let date, i
  for(let _date of Object.keys(flows.value)){
    i = 0
    
    for(let flow of flows.value[_date]){
      if(flow.id == flowForEdit.value.id){
        date = _date
        break
      }
      else i++
    }

    if(date) break
  }

  flows.value[date][i].emotions = [...editedFlow.emotions]
  flows.value[date][i].title = editedFlow.title
  flows.value[date][i].description = editedFlow.description

  flowForEdit.value = null
  editModalData.value = null
}

function addFlow(flow){
  const date = new Date(flow.dateCreated)
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  const key = `${month} ${year}`

  // create new group if not exists
  if (!flows.value[key])
    flows.value[key] = []

  // add flow to group
    flows.value[key].push(flow)

  // sort by dateCreated within group
    flows.value[key].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
}

const uniqueMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

function dateUpdated(newDate){
  selectedDate.value = newDate

  console.log('new date', newDate)

  displayedFlows.value = flows.value.filter(flow => {
    const date = new Date(flow.dateCreated)

    return date.getFullYear() == selectedDate.value.year && date.getMonth() == uniqueMonths.indexOf(selectedDate.value.month)
  })
}
</script>

<template>
    <main>
        <header>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path></g></svg>
          <h1>Flows</h1>
        </header>
        
        <DateSwitcher :dates="flows.map(flow => flow.dateCreated)" @update-date="dateUpdated" />

        <div class="flows">
              <FlowPreview
              v-for="flow of displayedFlows"
              :key="new Date(flow.dateCreated).toISOString() + flow.id"
              :flow="flow"
              @click="activeFlow = flow" />
            </div>
    </main>

    <FlowModal
      v-if="activeFlow"
      :flow="activeFlow"
      @close="activeFlow=null"
      @edit="openEditFlowModal(activeFlow)"
      @remove="openRemoveFlowModal(activeFlow)" />

    <RemoveFlowModal
      v-if="flowForRemoval"
      @close="cancelRemoveFlow"
      @remove="removeFlow"
       />

    <EditFlowModal
      v-if="flowForEdit"
      :flow="editModalData"
      @close="cancelEditFlow"
      @save="editedFlow => editFlow(editedFlow)" />

    <NavBottom activePage="flows" @addFlow="addFlow"></NavBottom>
</template>

<style scoped>  
  .group:first-of-type h2 {
    margin-top: 0;
  }
  
  .group {
    width: 100%;
  }
  
  .flows {
    box-sizing: border-box;
    width: 100%;
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  h2 .year {
    margin-left: 1rem;
    color: var(--col-dark-gray);
  }

  @media screen and (max-width: 850px) {
    .flows {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 600px) {
    .flows {
      grid-template-columns: 1fr;
    }
  }
</style>