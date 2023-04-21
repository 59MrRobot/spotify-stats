import { createSlice } from '@reduxjs/toolkit';

const topTrackSlice = createSlice({
  name: "top track",
  initialState: {
    topTracks: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startTopTracksProcess: (state) => {
      state.isFetching = true;
    },
    getTopTracksSuccess: (state, action) => {
      state.isFetching = false;
      state.topTracks = action.payload;
      state.error = false;
    },
    getTopTracksFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    resetTopTracks: (state) => {
      state.topTracks = null;
      state.isFetching = false;
      state.error = false;
    }
  }
});

export const {
  startTopTracksProcess,
  getTopTracksSuccess,
  getTopTracksFailure,
  resetTopTracks,
} = topTrackSlice.actions;

export default topTrackSlice.reducer;