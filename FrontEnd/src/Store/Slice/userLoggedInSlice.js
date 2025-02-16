import { createSlice } from "@reduxjs/toolkit";

const userLoggedInSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    login: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.login = true;
    },
    logout: (state) => {
      state.user = null;
      state.login = false;
    },
  },
});

export const { login, logout } = userLoggedInSlice.actions;
export default userLoggedInSlice.reducer;