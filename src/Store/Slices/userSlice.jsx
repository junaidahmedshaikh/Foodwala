import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: {},
    userCod: {},
  },
  reducers: {
    addUserCod(state, action) {
      // state.userDetail.push(action.payload);
      state.userCod = action.payload;
      //
      "Add User Succesfully", action.payload;
    },
  },
});

export const { addUserCod } = userSlice.actions;
export default userSlice.reducer;
