import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  fromAge: number
  toAge: number
}

const initialState: FilterState = { fromAge: 18, toAge: 40 }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter (state, action: PayloadAction<FilterState>) {
      state = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
