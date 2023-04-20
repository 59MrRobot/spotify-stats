import { createSlice } from '@reduxjs/toolkit';

const topArtistSlice = createSlice({
  name: "top artist",
  initialState: {
    topArtists: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startTopArtistProcess: (state) => {
      state.isFetching = true;
    },
    getTopArtistSuccess: (state, action) => {
      state.isFetching = false;
      state.topArtists = action.payload;
      state.error = false;
    },
    getTopArtistFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    resetTopArtists: (state) => {
      state.topArtists = null;
      state.isFetching = false;
      state.error = false;
    }
  }
});

export const {
  startTopArtistProcess,
  getTopArtistSuccess,
  getTopArtistFailure,
  resetTopArtists,
} = topArtistSlice.actions;

export default topArtistSlice.reducer;