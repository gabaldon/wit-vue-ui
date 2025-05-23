<template>
  <div class="card-border">
    <div class="card-container">
      <div class="feed-title">
        <FeedIcon class="img" :class="{ placeholder: loading }" :svg="svg" />
        <p class="name feed-title" :class="{ placeholder: loading }">
          {{ name.toUpperCase() }}
        </p>
      </div>
      <p class="value" :class="{ placeholder: loading }">{{ label }} {{ formatedValue }}</p>
      <p class="timestamp small-text" :class="{ placeholder: loading }">
        {{ formattedTimestamp }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from './utils/formatNumber'
import { calculateTimeAgo } from './utils/calculateTimeAgo'
import { computed } from 'vue'
import FeedIcon from './FeedIcon.vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  decimals: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: 'Name'
  },
  svg: {
    type: String,
    default: 'Icn'
  },
  value: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: ''
  },
  lastResultTimestamp: {
    type: String,
    default: ''
  },
  timeToUpdate: {
    type: Number,
    default: 0
  },
  network: {
    type: String,
    default: ''
  }
})
const formatedValue = computed(() => {
  const lastResult = parseFloat(props.value) / 10 ** props.decimals
  const hasMeaningfullZeros = `${lastResult.toFixed(3)}`.split('.')[1] === '000'
  const adjustedDecimals =
    lastResult < 1 || props.decimals < 3 || hasMeaningfullZeros ? props.decimals : 3
  const formatedLastResult = lastResult.toFixed(adjustedDecimals)
  return formatNumber(formatedLastResult)
})
const formattedTimestamp = computed(() => {
  return calculateTimeAgo(props.lastResultTimestamp)
})
</script>

<style lang="scss" scoped>
.card-border {
  @apply border-b-[0.5px] border-b-white-200 dark:border-b-black-800;
  width: 100%;
  cursor: pointer;
  height: max-content;
  &:last-of-type {
    border-bottom: none;
  }
}
.card-container {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
  align-content: center;
  justify-items: flex-start;
  width: 100%;
  height: max-content;
  font-weight: bold;
  row-gap: 8px;
  padding: 16px;
  transition: box-shadow 0.3s;
  .feed-title {
    grid-row: 1 / span 2;
    justify-content: center;
    align-items: center;
    display: flex;
    grid-column-gap: 8px;
    .img {
      display: flex;
      justify-content: center;
      align-self: center;
    }
  }
  .timestamp {
    font-style: italic;
    justify-self: flex-end;
    font-weight: normal;
  }
  .name {
    @apply text;
    display: flex;
    align-items: center;
  }
  .value {
    @apply text;
    justify-self: flex-end;
  }
  .placeholder {
    background-color: grey;
    border-radius: 24px;
    color: transparent;
  }
}
@media (max-width: 300px) {
  .card-container {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>
