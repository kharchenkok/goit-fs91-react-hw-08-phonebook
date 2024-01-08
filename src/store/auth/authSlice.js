import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleAuth = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleAuth)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleAuth)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, state => {
        state.token = '';
        state.user = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
