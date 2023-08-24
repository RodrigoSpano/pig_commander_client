import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'en',
  reducers: {
    setLanguage: (state, action) => {
      state = action.payload
      return state
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;