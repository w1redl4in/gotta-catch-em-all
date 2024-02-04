import { env } from "../env"

export function api(endpoint: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(endpoint), baseUrl)

  return fetch(url, init)
}
