
import {type QueryParams} from '@sanity/client'
import {client} from './client'

// Sanity fetch function that mimics the function with same name returned from defineLive (next-sanity)
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
}: {
  query: QueryString
  params?: QueryParams
}) {
  // Uncached query that fetches cache tags (on Next 15 uncached doesn't mean on every browser request, but on every ISR build)
  const {syncTags: tags} = await client.fetch(query, params, {
    filterResponse: false,
    cacheMode: 'noStale',
    tag: 'fetch-sync-tags', // The request tag makes the fetch unique, avoids deduping with the cached query that has tags
    next: {revalidate: false, tags: ['sanity:tags']},
  })
  console.log({tags: tags})
  const data = await client.fetch(query, params, {
    cacheMode: 'noStale',
    next: {revalidate: false, tags},
  })
  return {data, tags}
}
