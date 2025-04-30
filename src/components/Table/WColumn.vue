<template>
  <a
    v-if="url"
    :href="url ?? ''"
    target="_blank"
    class="text-wit-blue-600 dark:text-wit-blue-500 hover:underline"
  >
    {{ value ?? 'unknown' }} >
  </a>
  <p v-else-if="chips" class="grid grid-cols-2 w-max">
    <span
      v-for="(chip, index) in chips"
      :key="index"
      :class="chip.color"
      class="text-sm text-white-50 dark:text-white-50 rounded-full py-xs px-sm m-xs w-max"
    >
      {{ chip.label }}
    </span>
    <span
      v-for="(chip, index) in chips"
      :key="index"
      :class="chip.color"
      class="text-sm text-white-50 dark:text-white-50 rounded-full py-xs px-sm m-xs w-max"
    >
      {{ chip.label }}
    </span>
  </p>
  <span v-else>
    {{ value }}
  </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Chip } from './WTable'

defineProps({
  url: {
    type: String,
    default: null
  },
  chips: {
    type: Object as PropType<Chip[]>,
    default: null
  },
  value: {
    type: [String, Number],
    default: null
  }
})
</script>
