import { createSlice } from '@reduxjs/toolkit'

interface INavigationState {
  showNav: boolean
}

const initialState: INavigationState = {
  showNav: false
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openNavReducer(state) {
      state.showNav = true
    },
    closeNavReducer(state) {
      state.showNav = false
    }
  }
})

export const { openNavReducer, closeNavReducer } = navigationSlice.actions
export default navigationSlice.reducer
