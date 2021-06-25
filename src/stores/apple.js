import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 'fuji',
    name: 'ふじ',
    price: 158,
    stock: 100,
    area: '青森'
  },
  {
    id: 'akibae',
    name: '秋映',
    price: 128,
    stock: 150,
    area: '長野'
  },
  {
    id: 'haruka',
    name: '冬恋',
    price: 198,
    stock: 50,
    area: '岩手'
  }
]

const appleSlice = createSlice({
  name: 'apple',
  initialState,
  reducers: {
    buyApple: (state, action) => {
      state.filter(d => d.id === action.payload)[0].stock -= 1
    },
    supplyApple: (state, action) => {
      state.filter(d => d.id === action.payload)[0].stock += 1
    }
  }
})

export const {
  buyApple,
  supplyApple
} = appleSlice.actions

export default appleSlice.reducer
