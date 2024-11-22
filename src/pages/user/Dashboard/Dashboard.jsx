import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTime, setLoading, setError } from '@store/slices/totalTimeSlice';
import { totalTimeService } from '@services/totalTimeService';
import CurrentTotalTime from './CurrentTotalTime';
import Resumen from './Resumen'



const Dashboard = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.auth.user);
  const totalTime = useSelector(state => ({
    id: state.totalTime.id,
    userId: state.totalTime.userId,
    companyId: state.totalTime.companyId,
    startTime: state.totalTime.startTime,
    closed: state.totalTime.closed
  }));
  const loading = useSelector(state => state.totalTime.loading);
  const error = useSelector(state => state.totalTime.error);

  useEffect(() => {
    let mounted = true;

    const getTotalTime = async () => {
      if (!user?.id) return;

      try {
        dispatch(setLoading(true));
        const response = await totalTimeService.getTotalTime(user.id);

        if (mounted) {
          dispatch(setTotalTime(response));
        }
      } catch (err) {
        console.error('Error fetching total time:', err);
        if (mounted) {
          dispatch(setError(err.message || 'Failed to fetch total time'));
        }
      } finally {
        if (mounted) {
          dispatch(setLoading(false));
        }
      }
    };

    getTotalTime();

    return () => {
      mounted = false;
    };
  }, [user?.id, dispatch]);

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

  return totalTime.id ? (
    
    <CurrentTotalTime />
  ) : (
    <Resumen user={user} />
  );
};

export default Dashboard;