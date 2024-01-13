import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "./profile-slice";
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
      localStorage.setItem('token',JSON.stringify(state.uid));
    },
    logOut(state) {
      state.loggedIn = false;
      state.uid = null;
      localStorage.removeItem('IsLoggedIn');
      localStorage.removeItem('token');
      //auth.signOut();
    },
  },
});
export function onLogin(obj){
    return (dispatch)=>{
        console.log(obj);
        dispatch(authSlice.actions.logIn({uid:obj.uid}));
        dispatch(profileActions.setProfile({name:obj.name,email:obj.email}))
    }
}
export default authSlice;
export const authActions = authSlice.actions;