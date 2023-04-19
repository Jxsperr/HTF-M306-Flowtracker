<script setup>
import { ref, onMounted, watch } from 'vue';
import TextSwitcher from './TextSwitcher.vue';

const props = defineProps({
    dates: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['update-date']);

const uniqueYears = [...new Set(props.dates.map(date => new Date(date).getFullYear()))].sort((a, b) => a - b);
const uniqueMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const mostRecentDate = new Date(Math.max.apply(null, props.dates.map(date => new Date(date))));
const mostRecentYear = mostRecentDate.getFullYear();
const mostRecentMonth = uniqueMonths[mostRecentDate.getMonth()];

const selectedYear = ref(mostRecentYear);
const selectedMonth = ref(mostRecentMonth);

const monthSwitcherOptions = ref(null)

updateMonthSwitcherOptions()

function updateMonthSwitcherOptions () {
    const uniqueMonthsInYear = [
        ...new Set(props.dates
            .filter(date => new Date(date).getFullYear() === selectedYear.value)
            .map(date => uniqueMonths[new Date(date).getMonth()]))
    ].sort((a, b) => uniqueMonths.indexOf(a) - uniqueMonths.indexOf(b));

    monthSwitcherOptions.value = uniqueMonthsInYear.map(month => ({
        label: month,
        onSelected: () => {
            selectedMonth.value = month;
        },
        selected: selectedMonth.value === mostRecentMonth && selectedYear.value === mostRecentYear
    }))
}

const yearSwitcherOptions = uniqueYears.map(year => ({
    label: year,
    onSelected: () => {
        selectedYear.value = year
        monthSwitcherOptions.value = updateMonthSwitcherOptions()
    },
    selected: year === mostRecentYear
}));

function selectedYearChanged(newYear) {
    if(newYear) selectedYear.value = parseInt(newYear)

    updateMonthSwitcherOptions()
    selectedMonth.value = monthSwitcherOptions.value[0]?.label || '';

    emit('update-date', { year: selectedYear.value, month: selectedMonth.value });
}
</script>


<template>
    <div class="switchers">
        <TextSwitcher :options="monthSwitcherOptions" />
        <TextSwitcher :options="yearSwitcherOptions" @update-option="newYear => selectedYearChanged(newYear)" />
    </div>
</template>

<style>
.switchers {
    display: flex;
}
</style>
