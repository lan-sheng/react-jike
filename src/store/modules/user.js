import { request } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    setToken(state, { payload }) {
      state.token = payload
    },
  },
})

const { setToken } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = loginForm => {
  return async dispatch => {
    const { data } = await request.post('/authorizations', loginForm)
    dispatch(setToken(data.data.token))
  }
}
export { setToken, fetchLogin }
export default userReducer
