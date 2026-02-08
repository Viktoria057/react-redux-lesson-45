import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
  'message/fetchMessage',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Hello World!'), 2000);
    });
  }
);

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

export default messageSlice.reducer;
