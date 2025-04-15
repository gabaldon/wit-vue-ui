<template>
  <div class="grid gap-md justify-center align-middle">
    <WIcon :name="IconName.EmptyState" />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import WIcon from '../icon/WIcon.vue'
import { IconName } from '../icon/WIcon'
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
