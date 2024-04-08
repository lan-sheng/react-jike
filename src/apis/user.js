import { request } from '@/utils'

export function loginApi(params) {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: params,
  })
}

export function getProfileApi() {
  return request({
    url: '/user/profile',
    method: 'GET',
  })
}
