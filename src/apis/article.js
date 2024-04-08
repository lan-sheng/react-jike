import { request } from '@/utils'

export function getChannelApi() {
  return request({
    url: '/channels',
    method: 'GET',
  })
}

export function createArticleApi(data) {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data,
  })
}
