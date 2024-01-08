import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logInApi,
  logOutApi,
  refreshApi,
  registrationApi,
  setToken,
} from '../../api/authApi';
import { clearContacts } from '../contacts/contactsSlice';

export const registerUser = createAsyncThunk('users/signup', body =>
  registrationApi(body)
);

export const loginUser = createAsyncThunk('users/login', body =>
  logInApi(body)
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, { dispatch }) => {
    await logOutApi();
    dispatch(clearContacts());
  }
);

export const refreshUser = createAsyncThunk(
  'users/current',
  async (_, { getState, dispatch }) => {
    getState().auth.token && setToken(getState().auth.token);
    const data = await refreshApi();
    dispatch(clearContacts());
    return data;
  }
);
