import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    showMenu: false,
  },
  reducers: {
    updateShowMenu: (state, action) => {
      state.showMenu = action.payload ;
    },
  }
});

export const {
  updateShowMenu,
} = settingSlice.actions;

export default settingSlice.reducer;