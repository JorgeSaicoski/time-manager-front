import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const totalTimeSlice = createSlice({
  name: 'totalTime',
  initialState,
  reducers: {
    setTotalTime: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.data = null;
    },
    clearTotalTime: (state) => {
      state.data = null;
      state.error = null;
    }
  }
});

export const { setTotalTime, setLoading, setError, clearTotalTime } = totalTimeSlice.actions;
export default totalTimeSlice.reducer;