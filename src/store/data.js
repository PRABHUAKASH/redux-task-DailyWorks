import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: { name: '', email: '', password: '', signIn: false },
  },
  reducers: {
    signup: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = { name: '', email: '', password: '', signIn: false };
    },
  },
});

export const { signup, logout, validateUser } = userSlice.actions;

export default userSlice.reducer;
