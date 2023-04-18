<template>
  <div>
    <header>
      <h2>Your emotions over&nbsp;</h2>
      <TextSwitcher class="switcher" :options="switcherOptions" />
    </header>
    <line-chart
      :key="JSON.stringify(chartData) + JSON.stringify(chartOptions)"
      :chartData="chartData"
      :options="chartOptions"
    ></line-chart>
  </div>
</template>

<script setup>
  import TextSwitcher from "../../inputs/TextSwitcher.vue"
  import { ref } from "vue"
  import moment from "moment"
  import { LineChart } from "vue-chart-3"
  import { Chart, registerables } from "chart.js"

  import { emotions as emotionsData } from "../../../mockData"

  const switcherOptions = [{
      label: "1 Week",
      onSelected: () => setTimeframe("1w"),
    },
    {
      label: "1 Month",
      onSelected: () => setTimeframe("1m"),
    },
    {
      label: "1 Year",
      onSelected: () => setTimeframe("1y"),
    },
    {
      label: "All Time",
      onSelected: () => setTimeframe("all"),
      selected: true
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
        ticks: {
          stepSize: 1,
          precision: 0
        }
      }
    }
  }

  const emotions = emotionsData.map(emotion => `${emotion.emoji} ${emotion.title}`)

  const backgroundColors = emotionsData.map(emotion => emotion.color)

  function setTimeframe(timeframe) {
    const now = moment()
    let startDate
    let period
    let dateFormat

    switch (timeframe) {
      case "1w":
        startDate = now.clone().subtract(1, "weeks")
        period = "day"
        dateFormat = "MMM DD"
        break
      case "1m":
        startDate = now.clone().subtract(1, "months")
        period = "week"
        dateFormat = "MMM DD"
        break
      case "1y":
        startDate = now.clone().subtract(1, "years")
        period = "month"
        dateFormat = "MMM YYYY"
        break
      case "all":
      default:
        startDate = moment.min(
          flows.value.map((flow) => moment(flow.dateCreated))
        )
        period = "month"
        dateFormat = "MMM YYYY"
        break
    }

    const xAxisLabels = []
    const currentDate = startDate.clone()
    while (currentDate.isSameOrBefore(now)) {
      xAxisLabels.push(currentDate.format(dateFormat))
      currentDate.add(1, period)
    }

    const emotionsCount = Array(emotions.length)
      .fill()
      .map(() => Array(xAxisLabels.length).fill(0))

    flows.value.forEach((flow) => {
      if (moment(flow.dateCreated).isBefore(startDate)) return
      flow.emotions.forEach((emotion) => {
        const index = xAxisLabels.findIndex((label) =>
          moment(flow.dateCreated).isSame(moment(label, dateFormat), period)
        )

        if (index !== -1) emotionsCount[emotion][index]++
      })
    })

    chartData.value = {
      labels: xAxisLabels,
      datasets: emotions.map((emotion, i) => ({
        label: emotion,
        backgroundColor: backgroundColors[i],
        borderColor: backgroundColors[i],
        borderWidth: 4,
        pointRadius: 2,
        data: emotionsCount[i],
        fill: false,
        tension: .5
      }))
    }
  }

  setTimeframe("all")
</script>

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