import { request } from '@/utils'

// export function loginApi(params) {
//   return request({
//     url: '/authorizations',
//     method: 'POST',
//     data: params,
//   })
// }

export function getChannelApi() {
  return request({
    url: '/channels',
    method: 'GET',
  })
}
