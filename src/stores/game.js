import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizData: [],
  currentQuestion: 0,
  userAnswer: '',
  moneyTree: [10000, 20000 ,30000, 50000, 100000, 150000, 250000, 500000, 750000, 1000000, 1500000, 2500000, 5000000, 7500000, 10000000],
  currentMoney: 0,
  currentScene: 'standby'
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuizData: (state, data) => {
      state.quizData = data.payload
    },
    nextQuestion: state => {
      state.currentQuestion++
    },
    resetQuestion: state => {
      state.currentQuestion = 0
    },
    setUserAnswer: (state, answer) => {
      state.userAnswer = answer.payload
    },
    setScene: (state, scene) => {
      state.currentScene = scene.payload
    }
  }
})

export const {
  setQuizData,
  nextQuestion,
  resetQuestion,
  setUserAnswer,
  setScene
} = gameSlice.actions

export default gameSlice.reducer
