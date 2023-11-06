import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
  authToken: null,
  isLoggedIn: false,

};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  setAuthToken,
  setIsLoggedIn,
} = userReducer.actions;

export default userReducer.reducer;
