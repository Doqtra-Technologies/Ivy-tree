import type { QueryParams } from 'next-sanity'

import { client } from './client'

/**
 * Fetch from Sanity, returning `null` when Sanity is not configured or the
 * request fails. Callers fall back to static content on `null`.
 *
 * Responses are cached under `tags` (the document types queried) and
 * invalidated instantly by the `/api/revalidate` webhook. The time-based
 * revalidate is a safety net in case a webhook is missed.
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse | null> {
  if (!client) return null

  try {
    return await client.fetch<QueryResponse>(query, params, {
      next: { revalidate: 3600, tags },
    })
  } catch (error) {
    console.error('[sanity] fetch failed, using static content:', error)
    return null
  }
}

/** Return `value` unless it is null, undefined or an empty string/array. */
export function pick<T>(value: T | null | undefined, fallback: T): T {
  if (value === null || value === undefined) return fallback
  if (typeof value === 'string' && value.trim() === '') return fallback
  if (Array.isArray(value) && value.length === 0) return fallback
  return value
}
