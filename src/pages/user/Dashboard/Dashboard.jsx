import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTime, setLoading, setError } from '@store/slices/totalTimeSlice';
import { totalTimeService } from '@services/totalTimeService';
import CurrentTotalTime from './CurrentTotalTime';
import Resumen from './Resumen';

// Memoized selectors
const selectUser = state => state.auth.user;
const selectTotalTimeState = state => state.totalTime;
const selectTotalTime = state => ({
  id: state.totalTime.id,
  userId: state.totalTime.userId,
  companyId: state.totalTime.companyId,
  startTime: state.totalTime.startTime,
  closed: state.totalTime.closed
});
const selectLoading = state => state.totalTime.loading;
const selectError = state => state.totalTime.error;

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
      

      dispatch(setTotalTime(response));
    } catch (err) {
      console.error('Error fetching total time:', err);
      dispatch(setError(err.message || 'Failed to fetch total time'));
    } finally {
      dispatch(setLoading(false));
    }
  }, [user?.id, dispatch]);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      if (mounted) {
        await getTotalTime();
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [getTotalTime]);

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded">
        Error: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-4 text-gray-600">
        Loading...
      </div>
    );
  }

  return totalTime.id !== null ? <CurrentTotalTime /> : <Resumen user={user} />;
};

export default Dashboard;