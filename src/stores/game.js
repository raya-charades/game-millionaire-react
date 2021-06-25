import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentQuestion: 0,
  moneyTree: [10000, 20000 ,30000, 50000, 100000, 150000, 250000, 500000, 750000, 1000000, 1500000, 2500000, 5000000, 7500000, 10000000]
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    nextQuestion: state => {
      state.currentQuestion = state.currentQuestion + 1
    },
    resetQuestion: state => {
      state.currentQuestion = 0
    }
  }
})

export const {
  nextQuestion,
  resetQuestion
} = gameSlice.actions

export default gameSlice.reducer
