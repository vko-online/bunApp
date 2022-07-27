import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  fromAge: number
  toAge: number
  online: boolean
}

const initialState: FilterState = { fromAge: 20, toAge: 30, online: true }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter (state: FilterState, action: PayloadAction<FilterState>) {
      state.fromAge = action.payload.fromAge
      state.toAge = action.payload.toAge
      state.online = action.payload.online
    }
  }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
