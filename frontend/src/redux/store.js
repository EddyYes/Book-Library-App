import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice.js'
import filterReducer from './slices/filterSlice.js'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
})

export default store
