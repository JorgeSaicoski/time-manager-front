import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTime, setLoading, setError } from '@store/slices/totalTimeSlice';
import { totalTimeService } from '@services/totalTimeService';
import CurrentTotalTime from './CurrentTotalTime';
import Resumen from './Resumen';

const selectUser = state => state.auth.user;
const selectLoading = state => state.totalTime.loading;
const selectError = state => state.totalTime.error;
const selectTotalTime = state => state.totalTime;

const Dashboard = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(selectUser);
  const totalTime = useSelector(selectTotalTime);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  const getTotalTime = useCallback(async () => {
    if (!user?.id) return;

    try {
      dispatch(setLoading(true));
      const response = await totalTimeService.getTotalTime(user.id);
      
      const isClosed = response.FinishTime && response.FinishTime !== "0001-01-01T00:00:00Z";
      
      dispatch(setTotalTime({
        ...response,
        closed: isClosed,
        workTimes: response.WorkTimes || [],
        breakTime: response.BreakTime || null,
      }));
      
    } catch (err) {
      console.error('Error fetching total time:', err);
      dispatch(setError(err.message || 'Failed to fetch total time'));
    } finally {
      dispatch(setLoading(false));
    }
  }, [user?.id, dispatch]);

  useEffect(() => {
    getTotalTime();
  }, [getTotalTime]); 

  if (loading) {
    return <div className="p-4 text-gray-600">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded">
        Error: {error}
      </div>
    );
  }

  return totalTime.closed ? <Resumen user={user} /> : <CurrentTotalTime />;
};

export default Dashboard;