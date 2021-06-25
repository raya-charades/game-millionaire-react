import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orangeLength: 5
}

const orangeSlice = createSlice({
  name: 'orange',
  initialState,
  reducers: {
    incrementOrangeLength: state => {
      state.orangeLength += 1
    },
    decrementOrangeLength: state => {
      state.orangeLength -= 1
    },
  },
})

export const {
  incrementOrangeLength,
  decrementOrangeLength
} = orangeSlice.actions

export default orangeSlice.reducer
