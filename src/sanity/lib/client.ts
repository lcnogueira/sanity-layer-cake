// import { createClient } from 'next-sanity'
import {createClient} from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: { studioUrl: '/studio' }, //  Only used when Draft Mode is enabled. The URL is used to create clickable links in the preview, which open to the correct document and field from which the content came.
})
