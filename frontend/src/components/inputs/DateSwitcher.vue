<script setup>
import { ref } from 'vue'
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

function updateMonthSwitcherOptions(selectLastMonth=false) {
  const uniqueMonthsInYear = [
    ...new Set(props.dates
      .filter(date => new Date(date).getFullYear() === selectedYear.value)
      .map(date => uniqueMonths[new Date(date).getMonth()]))
  ].sort((a, b) => uniqueMonths.indexOf(a) - uniqueMonths.indexOf(b))

  const mostRecentMonthInYear = selectLastMonth ? uniqueMonthsInYear.at(-1) : uniqueMonthsInYear[0]
  
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

  updateMonthSwitcherOptions()
}

function selectedMonthChanged(newMonth) {
  selectedMonth.value = newMonth
  emit('update-date', { year: selectedYear.value, month: selectedMonth.value })
}

// get month options and select the last month (most recent date)
updateMonthSwitcherOptions(true)
</script>

<template>
  <div class="switchers">
    <TextSwitcher :options="monthSwitcherOptions" @update-option="selectedMonthChanged" />&ThickSpace;
    <TextSwitcher :options="yearSwitcherOptions" @update-option="selectedYearChanged" />
  </div>
</template>

<style>
.switchers {
  display: flex;
  flex-wrap: wrap;
}
</style>
