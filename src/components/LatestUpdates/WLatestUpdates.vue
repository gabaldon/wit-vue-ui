<template>
  <div class="updates-container">
    <div class="updates-title text dark:text-white-200">
      <IntermitentDot />
      <h2 class="title-h6">Latest updates</h2>
    </div>
    <div v-if="data == null" class="feeds-container bg-white-500 dark:bg-black-950 rounded-[24px]">
      <WFeedCard v-for="feed in 4" :key="feed" :loading="true" />
    </div>
    <TransitionGroup v-else tag="ul" name="fade" class="feeds-container">
      <WFeedCard
        v-for="feed in list"
        :key="feed.name + feed.network + feed.value + feed.color"
        :name="feed.name"
        :decimals="feed.decimals"
        :time-to-update="feed.timeToUpdate ?? 0"
        :svg="feed.svg"
        :value="feed.value"
        :last-result-timestamp="feed.lastResultTimestamp"
        :label="feed.label"
        :network="feed.network"
        :chain="feed.chain"
      />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { formatSvgName } from './utils/formatSvgName'
import requestLatestFeeds from './api/getFeedsRequest'
import IntermitentDot from './IntermitentDot.vue'
import WFeedCard from '../FeedCard/WFeedCard.vue'
import { type FeedInfo, type FeedsRequestInfo, type FormatedFeedInfo } from './WLatestUpdates'
import { type Ref, onMounted, onBeforeUnmount, computed, ref } from 'vue'

const data: Ref<FeedsRequestInfo> = ref((await requestLatestFeeds()) as FeedsRequestInfo)
const poller = ref()

onMounted(
  () =>
    (poller.value = setInterval(async () => {
      data.value = (await requestLatestFeeds()) as FeedsRequestInfo
      list.value = allFeeds.value
    }, 10000))
)
onBeforeUnmount(() => {
  if (poller.value) clearInterval(poller.value)
})

const shuffle = (array: Array<unknown>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const allFeeds: Ref<FormatedFeedInfo[]> = computed(() => {
  if (data.value.feeds.feeds) {
    const feeds: FormatedFeedInfo[] = data.value.feeds.feeds
      .filter((feed: FeedInfo) => {
        return feed.lastResult && Number(feed.lastResultTimestamp) > 0
      })
      .map((feed: FeedInfo) => {
        return {
          decimals: parseInt(feed.feedFullName.split('_').pop() ?? '3'),
          name: feed.name,
          value: feed.lastResult,
          lastResultTimestamp: feed.lastResultTimestamp || '0',
          label: feed.label,
          timeToUpdate: feed.heartbeat ? Number(feed.heartbeat) + Number(feed.finality) : null,
          img: {
            name: formatSvgName(feed.name),
            alt: feed.name
          },
          network: feed.network,
          chain: feed.chain,
          color: feed.color,
          blockExplorer: feed.blockExplorer,
          svg: feed.logo
        }
      })
      // TODO: update API to get ordered and paginated feeds
      .sort((feed1, feed2) => {
        return Number(feed2.lastResultTimestamp) - Number(feed1.lastResultTimestamp)
      })

    // TODO: delete suffle function and retrieved lates results
    return shuffle(feeds).splice(0, 4) as FormatedFeedInfo[]
  } else {
    return []
  }
})
const list: Ref<FormatedFeedInfo[]> = ref(allFeeds.value)
</script>

<style lang="scss" scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
.fade-leave-active {
  position: absolute;
}

.updates-container {
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 24px;
  max-width: 400px;
  height: max-content;
  .updates-title {
    display: flex;
    font-weight: bold;
    column-gap: 8px;
    align-items: center;
  }
  .feeds-container {
    @apply bg-white-100 dark:bg-black-950 rounded-[24px];
    display: grid;
    position: relative;
    padding: 0;
  }
}
</style>
