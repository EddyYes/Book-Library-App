import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //1-й вариант использование Immer
      state.title = action.payload
      // return { ...state, title: action.payload }
      // 2-й вариант-традиционный подход
    },
    setAuthorFilter: (state, action) => {
      //1-й вариант использование Immer
      state.author = action.payload
      // return { ...state, author: action.payload }
      // 2-й вариант-традиционный подход
    },
    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author

export default filterSlice.reducer
