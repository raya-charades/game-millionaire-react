import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import appleReducer from './apple'
import orangeReducer from './orange'
import gameReducer from './game'

const reducer = combineReducers({
  apple: appleReducer,
  orange: orangeReducer,
  game: gameReducer
})

const store = configureStore({ reducer })

export default store