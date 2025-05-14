export type FeedInfo = {
  feedFullName: string
  name: string
  address: string
  lastResult: string
  lastResultTimestamp: string
  network: string
  label: string
  chain: string
  blockExplorer: string
  color: string
  heartbeat: string
  finality: string
  logo: string
}

export type FormatedFeedInfo = {
  decimals: number
  name: string
  value: string
  lastResultTimestamp: string
  label: string
  timeToUpdate: number | null
  img: {
    name: string
    alt: string
  }
  network: string
  chain: string
  color: string
  blockExplorer: string
  svg: string
}

export type FeedsRequestInfo = {
  feeds: {
    feeds: FeedInfo[]
    total: number
  }
}
