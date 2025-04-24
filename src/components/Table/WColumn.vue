<template>
  <a
    v-if="url"
    :href="url ?? ''"
    target="_blank"
    class="text-wit-blue-600 dark:text-wit-blue-500 hover:underline"
  >
    {{ value ?? 'unknown' }}
  </a>
  <span
    v-else-if="chips"
    v-for="(chip, index) in chips"
    :key="index"
    :class="chip.color"
    class="text-sm text-white-50 dark:text-white-50 rounded-full py-xs px-sm m-xs"
  >
    {{ chip.label }}
  </span>
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
