import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userData: null,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: initialState,
  reducers: {
    USER_DATA: (state, action) => {
      state.userData = action.payload;
    },
    REMOVE_USER_DATA: state => {
      state.userData = null;
    },
  },
});

export default AuthSlice.reducer;
export const { USER_DATA, REMOVE_USER_DATA } = AuthSlice.actions;
