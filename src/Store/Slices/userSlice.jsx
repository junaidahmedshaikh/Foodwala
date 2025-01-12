import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: {},
  },
  reducers: {
    addUser(state, action) {
      state.userDetail.push(action.payload);
      console.log("Add User Succesfully");
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice;
