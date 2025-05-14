import { request } from 'graphql-request'
import feedsQuery from './queries/feeds'

export default async () => {
  return await request('https://staging-feeds-api.witnet.io/', feedsQuery, {
    network: 'all'
  })
}
