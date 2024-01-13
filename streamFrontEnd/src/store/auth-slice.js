import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    accountType: null,
    uid: null,
  },
  reducers: {
    logIn(state, action) {
      const payload = action.payload;
      state.loggedIn = true;
      state.uid = payload.uid;
      localStorage.setItem('IsLoggedIn','1');
      localStorage.setItem('uid',JSON.stringify(state.uid));
    },
    logOut(state) {
      state.loggedIn = false;
      state.uid = null;
      //auth.signOut();
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;