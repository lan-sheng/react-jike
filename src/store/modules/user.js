import { getProfileApi, loginApi } from '@/apis/user'
import { getToken, setToken as _setToken, request, removeToken } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'
const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    userInfo: {},
  },
  reducers: {
    setToken(state, { payload }) {
      state.token = payload
      _setToken(payload)
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    },
  },
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = loginForm => {
  return async dispatch => {
    // const { data } = await request.post('/authorizations', loginForm)
    const { data } = await loginApi(loginForm)
    dispatch(setToken(data.data.token))
  }
}
// 获取用户信息
const fetchUserInfo = () => {
  return async dispatch => {
    // const { data } = await request.get('/user/profile')
    // const { data } = await getProfileApi()
    const data = { data: { name: 'geek', id: 1, birthday: '2020-01-01', gender: 1, mobile: '13800000000', photo: 'http://geek.itheima.net/images/user_head.jpg' } }
    dispatch(setUserInfo(data.data))
  }
}
export { setToken, fetchLogin, setUserInfo, fetchUserInfo, clearUserInfo }
export default userReducer
