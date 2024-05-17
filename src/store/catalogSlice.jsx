import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    foundMovie: {},
    favorites: [],
    
  },
  reducers: {
    setCatalog: (state, { payload: movie }) => {
      if (!state.favorites.some(m => m.imdbID === movie.imdbID)) {

        state.favorites.push(movie);
        
      } else {
        state.favorites = state.favorites.filter(m => m.imdbID !== movie.imdbID);
      }
    },
    setMovie: (state, { payload: movie }) => {
      state.foundMovie = movie;
    }
  }
});

export const { setCatalog, setMovie } = catalogSlice.actions;
export default catalogSlice.reducer;