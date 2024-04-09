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

export function getArticleListApi(params) {
  return request({
    url: `mp/articles`,
    method: 'GET',
    params,
  })
}

export function delArticleApi(id) {
  return request({
    url: `mp/articles/${id}`,
    method: 'DELETE',
  })
}
