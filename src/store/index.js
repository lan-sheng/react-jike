import { configureStore } from '@reduxjs/toolkit'
import { default as userReducer } from './modules/user'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})
