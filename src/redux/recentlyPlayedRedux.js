import { createSlice } from '@reduxjs/toolkit';

const recentlyPlayedSlice = createSlice({
  name: "recently played",
  initialState: {
    recentlyPlayed: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    startRecentlyPlayedProcess: (state) => {
      state.isFetching = true;
    },
    getRecentlyPlayedSuccess: (state, action) => {
      state.isFetching = false;
      state.recentlyPlayed = action.payload;
      state.error = false;
    },
    getRecentlyPlayedFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetRecentlyPlayed: (state) => {
      state.recentlyPlayed = null;
      state.isFetching = false;
      state.error = false;
    }
  }
});

export const {
  startRecentlyPlayedProcess,
  getRecentlyPlayedSuccess,
  getRecentlyPlayedFailure,
  resetRecentlyPlayed,
} = recentlyPlayedSlice.actions;

export default recentlyPlayedSlice.reducer;