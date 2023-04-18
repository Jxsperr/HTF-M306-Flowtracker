<script setup>
    import Switcher from '../../inputs/Switcher.vue'

    import { ref } from "vue"
    import moment from "moment"

    import { LineChart } from "vue-chart-3"
    import { Chart, registerables } from "chart.js"

    const switcherOptions = [
        {
            label: '1 Week',
            onSelected: () => setTimeframe('1w')
        },
        {
            label: '1 Month',
            onSelected: () => setTimeframe('1m')
        },
        {
            label: '1 Year',
            onSelected: () => setTimeframe('1y')
        },
        {
            label: 'All Time',
            onSelected: () => setTimeframe('all'),
            selected: true
        }
    ]

    Chart.register(...registerables)

    const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
    })

    const flows = ref(props.data)
    const chartData = ref(null)

    const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
    }

    function setTimeframe(timeframe) {
    const now = moment()
    let startDate

    switch (timeframe) {
        case "1w":
        startDate = now.clone().subtract(1, "weeks");
        break;
        case "1m":
        startDate = now.clone().subtract(1, "months");
        break;
        case "1y":
        startDate = now.clone().subtract(1, "years");
        break;
        case "all":
        default:
        startDate = now.clone().subtract(100, "years"); // a long time ago
        break;
    }

    const filteredFlows = flows.value.filter((flow) =>
        moment(flow.dateCreated).isSameOrAfter(startDate)
    )

    const emotionsCount = Array(9).fill(0)

    filteredFlows.forEach((flow) => {
        flow.emotions.forEach((emotion) => {
        emotionsCount[emotion]++
        })
    })

    chartData.value = {
        labels: [
        "Joy",
        "Sadness",
        "Anger",
        "Fear",
        "Love",
        "Surprise",
        "Disgust",
        "Trust",
        "Anticipation",
        ],
        datasets: [
        {
            label: "Emotions",
            backgroundColor: "#f87979",
            data: emotionsCount,
        },
        ],
    }
    }

    setTimeframe("all")
</script>

<template>
    <line-chart :key="JSON.stringify(chartData) + JSON.stringify(chartOptions)" :chartData="chartData" :options="chartOptions"></line-chart>
    <switcher class="switcher" :options="switcherOptions" />
</template>

<style scoped>
    .buttons {
        display: flex;
        justify-content: center;
    }

    .buttons button {
        margin: 0 1rem;
    }

    .switcher {
        margin-top: 4rem;
    }
</style>