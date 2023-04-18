<script setup>
import FlowPreview from './FlowPreview.vue'
import FlowModal from './FlowModal.vue'

import RemoveFlowModal from './RemoveFlowModal.vue'
import EditFlowModal from './EditFlowModal.vue'

import NavBottom from '../../layout/NavBottom.vue'


import { monthNames } from '../../../services/formatDate'
import { ref } from 'vue';
import { flows as flowData } from '../../../mockData'

const activeFlow = ref(null)
const flows = ref([])

flows.value = flowData

const flowForRemoval = ref(null)
const flowForEdit = ref(null)

const editModalData = ref(null)

function groupFlowsByMonth(flows) {
  const groupedFlows = {}

  flows.forEach(flow => {
    const date = new Date(flow.dateCreated)
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const key = `${month} ${year}`

    if (!groupedFlows[key]) {
      groupedFlows[key] = []
    }

    groupedFlows[key].push(flow)

    groupedFlows[key].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
  })

  return groupedFlows
}

flows.value = groupFlowsByMonth(flows.value)

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
</script>

<template>
    <main>
        <header>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M21 12h-2c-.894 0-1.662-.857-1.761-2c-.296-3.45-.749-6-2.749-6s-2.5 3.582-2.5 8s-.5 8-2.5 8s-2.452-2.547-2.749-6c-.1-1.147-.867-2-1.763-2h-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <h1>Flows</h1>
        </header>

        <section class="group" v-for="(group, date) in flows" :key="date.replace(' ', '-')">
            <h2>{{ date.split(' ')[0] }}<span class="year">{{ date.split(' ')[1] }}</span></h2>

            <div class="flows">
              <FlowPreview
              v-for="flow of group"
              :key="date.replace(' ', '-') + flow.id"
              :flow="flow"
              @click="activeFlow = flow" />
            </div>
        </section>
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
      width: 100%;
      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;

      justify-content: space-between;
      align-items: flex-start;
  }

  h2 .year {
    margin-left: 1rem;
    color: var(--col-dark-gray);
  }
</style>