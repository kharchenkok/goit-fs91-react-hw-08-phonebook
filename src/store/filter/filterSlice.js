import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    nameFilter: '',
  },
  reducers: {
    setNameFilterAction: (state, action) => {
      state.nameFilter = action.payload;
    },
  },
});

export const { setNameFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
