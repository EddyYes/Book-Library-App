import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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
    setOnlyFavoriteFilter: (state) => {
      // переключение значения между true и false
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters: () => {
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
