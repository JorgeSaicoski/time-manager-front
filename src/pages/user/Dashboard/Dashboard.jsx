import { useDispatch, useSelector } from 'react-redux';
import { totalTimeService } from '@services/totalTimeService';
import { useEffect } from 'react';
import { setTotalTime, setLoading, setError } from '@store/slices/totalTimeSlice';
import Resumen from './Resumen';
import CurrentTotalTime from './CurrentTotalTime';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { data: totalTime, loading, error } = useSelector(state => state.totalTime);

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
      } catch (error) {
        console.error('Error fetching total time:', error);
        if (mounted) {
          dispatch(setError(error.message));
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return totalTime?.id ? <CurrentTotalTime /> : <Resumen user={user} />;
};

export default Dashboard;