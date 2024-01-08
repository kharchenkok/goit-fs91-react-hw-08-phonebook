import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authReducer } from './auth/authSlice';

const persistConfigAuth = {
  key: 'token',
  storage,
  blacklist: ['user'],
};

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducerAuth,
};
