<template>
  <WIcon
    v-if="!order && isCurrentLabel"
    :color="'#a4a2a2'"
    :name="IconName.ArrowUp"
    class="w-[10px] h-auto pl-xs inline"
  ></WIcon>
  <WIcon
    v-else
    :name="IconName.ArrowDown"
    :color="'#a4a2a2'"
    class="w-[10px] h-auto pl-xs inline"
  ></WIcon>
</template>

<script setup lang="ts">
import WIcon from '../icon/WIcon.vue'
import { IconName } from '../icon/WIcon'
import { computed } from 'vue'

const props = defineProps({
  label: {
    required: true,
    type: Number
  },
  order: {
    required: true,
    type: Boolean
  },
  currentLabel: {
    required: true,
    type: Number
  }
})
const isCurrentLabel = computed(() => props.currentLabel === props.label)
</script>
