import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  userId: null,
  companyId: null,
  startTime: null,
  finishTime: null,
  workTimes: [],
  breakTime: null,
  brb: null,
  closed: true,
  loading: false,
  error: null
};

const totalTimeSlice = createSlice({
  name: 'totalTime',
  initialState,
  reducers: {
    setTotalTime: (state, { payload }) => {
      state.id = payload?.id;
      state.userId = payload?.user?.id;
      state.companyId = payload?.company?.id;
      state.startTime = payload?.startTime;
      state.closed = payload?.closed;
    },
    closeTotalTime: (state) => {
      state.closed = true;
      state.finishTime = new Date().toISOString(); 
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    resetTotalTime: () => {
      return initialState;
    },
    addWorkTime: (state, { payload }) => {
      state.workTimes.push(payload);
    },
    setBreakTime: (state, { payload }) => {
      state.breakTime = payload;
    },
    setBrb: (state, { payload }) => {
      state.brb = payload;
    }
  }
});

export const {
  setTotalTime,
  closeTotalTime,
  setLoading,
  setError,
  resetTotalTime,
  addWorkTime,
  setBreakTime,
  setBrb
} = totalTimeSlice.actions;

export default totalTimeSlice.reducer;