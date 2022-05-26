  import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MoviesState {
  movies: {}
}

const initialState: MoviesState = {
  movies: {},
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state,{payload}) => {
      state.movies = payload
    },
    decrement: (state) => {
      state
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovies, decrement, incrementByAmount } = moviesSlice.actions
export const getAllMovies =(state:any)=>state.movies.movies
export default moviesSlice.reducer