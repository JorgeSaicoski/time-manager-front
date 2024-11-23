import { createSlice, createSelector } from '@reduxjs/toolkit';

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
      Object.assign(state, payload);
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
    resetTotalTime: () => initialState,
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

export const selectTotalTime = (state) => state.totalTime;
export const selectClosed = (state) => state.totalTime.closed;
export const selectWorkTimes = (state) => state.totalTime.workTimes;
export const selectLoading = (state) => state.totalTime.loading;
export const selectError = (state) => state.totalTime.error;
export const selectBreakTime = (state) => state.totalTime.breakTime;
export const selectBrb = (state) => state.totalTime.brb;
export const selectUserId = (state) => state.totalTime.userId;
export const selectStartTime = (state) => state.totalTime.startTime;
export const selectFinishTime = (state) => state.totalTime.finishTime;

export const selectTotalWorkTime = createSelector(
  [selectWorkTimes],
  (workTimes) => workTimes.reduce((total, time) => total + time, 0)
);

export const selectSessionStatus = createSelector(
  [selectClosed, selectBrb],
  (closed, brb) => {
    if (closed) return 'CLOSED';
    if (brb) return 'AWAY';
    return 'ACTIVE';
  }
);

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