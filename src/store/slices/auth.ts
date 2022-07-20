import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

interface AuthState {
  currentUserId: string | null
  token: string | null
  name: string | null // store name for onboarding check
}
interface AuthStatePayload {
  currentUserId: string
  token: string
  name: string
}

const initialState: AuthState = { currentUserId: null, token: null, name: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuthSuccess (state, action: PayloadAction<AuthStatePayload>) {
      state.currentUserId = action.payload.currentUserId
      state.token = action.payload.token
      state.name = action.payload.name
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.currentUserId = null
      state.token = null
      state.name = null
    })
  }
})

export const { onAuthSuccess } = authSlice.actions
export default authSlice.reducer
