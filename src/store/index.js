import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import totalTimeReducer from './slices/totalTimeSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        totalTime: totalTimeReducer
    }
});

