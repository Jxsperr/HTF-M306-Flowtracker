<script setup>
import { ref, watch } from 'vue'
import TextSwitcher from './TextSwitcher.vue'

const props = defineProps({
  dates: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update-date'])

const uniqueYears = [...new Set(props.dates.map(date => new Date(date).getFullYear()))].sort((a, b) => b - a)
const uniqueMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const mostRecentDate = new Date(Math.max.apply(null, props.dates.map(date => new Date(date))))
const mostRecentYear = mostRecentDate.getFullYear()
const mostRecentMonth = uniqueMonths[mostRecentDate.getMonth()]

const selectedYear = ref(mostRecentYear)
const selectedMonth = ref(mostRecentMonth)

const monthSwitcherOptions = ref([])

let updatingMonth = false

// update the month options when the year changed
watch(selectedYear, updateMonthSwitcherOptions)

function updateMonthSwitcherOptions(selectLastMonth=false) {
  let monthBefore = selectedMonth.value

  const uniqueMonthsInYear = [
    ...new Set(props.dates
      .filter(date => new Date(date).getFullYear() === selectedYear.value)
      .map(date => uniqueMonths[new Date(date).getMonth()]))
  ].sort((a, b) => uniqueMonths.indexOf(a) - uniqueMonths.indexOf(b))

  const mostRecentMonthInYear = selectLastMonth ? uniqueMonthsInYear[0] : uniqueMonthsInYear.at(-1)
  
  if(monthBefore != mostRecentMonthInYear) updatingMonth = true
  selectedMonth.value = mostRecentMonthInYear

  monthSwitcherOptions.value = uniqueMonthsInYear.map(month => ({
    value: month,
    label: month,
    selected: month === selectedMonth.value
  }))

  emit('update-date', { year: selectedYear.value, month: selectedMonth.value })
}

const yearSwitcherOptions = uniqueYears.map(year => ({
  value: year,
  label: year,
  selected: year === mostRecentYear
}))

function selectedYearChanged(newYear) {
  selectedYear.value = parseInt(newYear)
}

function selectedMonthChanged(newMonth) {
  selectedMonth.value = newMonth
  if(!updatingMonth) emit('update-date', { year: selectedYear.value, month: selectedMonth.value })

  updatingMonth = false
}

// get month options and select the last month (most recent date)
updateMonthSwitcherOptions(true)
</script>

<template>
  <div class="switchers">
    <TextSwitcher :options="monthSwitcherOptions" @update-option="selectedMonthChanged" />
    <TextSwitcher :options="yearSwitcherOptions" @update-option="selectedYearChanged" />
  </div>
</template>

<style>
.switchers {
  display: flex;

  margin-bottom: 4rem;
}
</style>
