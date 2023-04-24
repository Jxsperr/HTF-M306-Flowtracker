<script setup>
import TextSwitcher from "../../inputs/TextSwitcher.vue"
import { ref } from "vue"
import moment from "moment"
import { LineChart } from "vue-chart-3"
import { Chart, registerables } from "chart.js"

import Obaba from '../../../assets/obaba.jpg'

import { emotions as emotionsData } from "../../../mockData"

const switcherOptions = [
  {
    label: "Week",
    value: "1w",
    selected: true
  },
  {
    label: "Month",
    value: "1m"
  },
  {
    label: "Year",
    value: "1y"
  }
]

Chart.register(...registerables)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const flows = ref(props.data)
const chartData = ref(null)

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      offset: true,
      stacked: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
        precision: 0,
        callback: value => `${value}%`
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: context => {
          const label = context.dataset.label || ""
          const value = context.parsed.y
          return `${label}: ${value.toFixed(2)}%`
        }
      }
    }
  }
}

const emotions = emotionsData.map(emotion => `${emotion.emoji} ${emotion.title}`)

const backgroundColors = emotionsData.map(emotion => emotion.color)

const bgImage = ref(new Image())

bgImage.value.src = Obaba

function setTimeframe(timeframe) {
  let xAxisLabels

  switch (timeframe) {
    case "1w":
      xAxisLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      break
    case "1m":
      xAxisLabels = ["Week 1", "Week 2", "Week 3", "Week 4"]
      break
    case "1y":
      xAxisLabels = moment.monthsShort()
      break
    default:
      return
  }

  const emotionsCount = Array(emotions.length)
    .fill()
    .map(() => Array(xAxisLabels.length).fill(0))

  const dayCounts = Array(xAxisLabels.length).fill(0)
  const totalEmotionsCount = Array(xAxisLabels.length).fill(0)

  flows.value.forEach(flow => {
    const flowDate = moment(flow.dateCreated)

    const index = (() => {
      switch (timeframe) {
        case "1w":
          return flowDate.isoWeekday() - 1
        case "1m":
          const dayOfMonth = flowDate.date()
          const weekIndex = Math.ceil(dayOfMonth / 7) - 1
          return weekIndex
        case "1y":
          return flowDate.month()
      }
    })()

    flow.emotions.forEach(emotion => {
      emotionsCount[emotion][index]++
      totalEmotionsCount[index]++
    })

    dayCounts[index]++
  })

  const emotionsPercentage = emotionsCount.map((counts) =>
    counts.map((count, index) => {
      if (totalEmotionsCount[index] === 0) return 0

      return (count / totalEmotionsCount[index]) * 100
    })
  )

  chartData.value = {
    labels: xAxisLabels,
    datasets: emotions.map((emotion, i) => ({
      label: emotion,
      backgroundColor: backgroundColors[i],
      borderColor: backgroundColors[i],
      borderWidth: 4,
      pointRadius: 2,
      data: emotionsPercentage[i],
      fill: "origin",
      tension: 0.3
    }))
  }
}

setTimeframe("1w")
</script>

<template>
  <div>
    <header>
      <h2>Your average&ThickSpace;</h2>
      <TextSwitcher class="switcher" :options="switcherOptions" @update-option="newValue=>setTimeframe(newValue)" />
    </header>

    <line-chart
      :key="JSON.stringify(chartData) + JSON.stringify(chartOptions)"
      :chartData="chartData"
      :options="chartOptions"
      :height="600"
    ></line-chart>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 3rem;
}

h2 {
  font-weight: 400;
  margin: 0;
}

.chart-container {
  height: 800px;
  width: 100%;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
