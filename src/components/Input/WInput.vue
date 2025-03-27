<template>
  <div
    class="flex"
    :class="{
      [`relative items-center`]: isIconInput
    }"
  >
    <input
      :type="contentType"
      :placeholder="placeholder"
      :name="contentType"
      :class="{
        [`[&&]:border-black-950 [&&]:dark:border-white-50 border-2 [&&]:focus:border-wit-blue-500 [&&]:dark:focus:border-wit-blue-500`]:
          outlined,
        [`[&&]:rounded-l-full [&&]:rounded-none [&&]:dark:focus:border-r-0 [&&]:focus:border-r-0`]:
          isActionInput
      }"
      class="text-black-950 dark:text-white-50 bg-white-50 dark:bg-black-950 outline-none border-white-50 dark:border-black-950 required email rounded-full border min-w-[300px] sm:min-w-full py-sm px-md block w-full shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 focus:border-wit-blue-500 dark:focus:border-wit-blue-500 focus:border-2"
      value=""
    />
    <input
      v-if="isActionInput"
      @click="action"
      type="submit"
      :name="actionLabel"
      class="text-wit-blue-500 relative z-0 dark:text-black-950 margin rounded-r-full py-sm px-md inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-black-950 dark:border-white-50 bg-black-950 dark:bg-white-50 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      :value="actionLabel"
    />
    <div v-else-if="isIconInput" class="absolute right-md z-10">
      <slot name="icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="stroke-black-400 dark:stroke-white-500"
            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
            stroke="#232323"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke-black-400 dark:stroke-white-500"
            d="M14 14.0001L11.1 11.1001"
            stroke="#232323"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { inputTypes, InputType } from './WInput'

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: InputType.Base,
    validator(value: InputType) {
      return inputTypes.includes(value)
    }
  },
  outlined: {
    type: Boolean,
    default: false
  },
  contentType: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: null
  },
  actionLabel: {
    type: String,
    required: false,
    default: null
  }
})
const emit = defineEmits(['action'])
const isActionInput = computed(() => props.type === InputType.Action)
const isIconInput = computed(() => props.type === InputType.Icon)
function action() {
  emit('action')
}
</script>
