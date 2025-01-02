import { createClient, type QueryParams } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  // revalidate = 3600, // default revalidation time in seconds
  // tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      // revalidate: false = cache indefinitely (https://github.com/sanity-io/next-sanity/tree/main/packages/next-sanity#sanityfetch-helper-function)
      revalidate: false,
      // revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      // tags, // for tag-based revalidation
    },
  })
}