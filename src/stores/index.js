import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './game'

const reducer = combineReducers({
  game: gameReducer
})

const store = configureStore({ reducer })

export default store