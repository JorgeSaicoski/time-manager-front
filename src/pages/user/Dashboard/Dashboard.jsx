import { useDispatch, useSelector } from 'react-redux';
import { totalTimeService } from '@services/totalTimeService';
import { useEffect, useState } from 'react';
import { setTotalTime, setLoading, setError } from '@store/slices/totalTimeSlice';
import Resumen from './Resumen';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const totalTime = useSelector(state => state.totalTime);
  const [isLoading, setIsLoading] = useState(false);
  const [totalTimeRun, setTotalTimeRun] = useState(false)


  useEffect(() => {
    if (user?.id) {
      const getTotalTime = async () => {
        try {
          setIsLoading(true);
          dispatch(setLoading(true));
          const response = await totalTimeService.getTotalTime(user?.id);
          dispatch(setTotalTime(response));
        } catch (error) {
          console.error('Error fetching total time:', error);
          dispatch(setError(error.message));
        } finally {
          setIsLoading(false);
          dispatch(setLoading(false));
        }
        if (totalTime?.id) {
          setTotalTimeRun(true)
        }
      };
      getTotalTime()
    }
  }, [user?.id, dispatch, totalTime?.id]);
  
  const display = () =>{
    console.log(totalTime)
    console.log(totalTimeRun)
    console.log(isLoading)
  }


  return (
    <>
      {totalTimeRun ? (
        <div>totaltime <button onClick={display}>click</button></div>
        
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <Resumen user={user} />
      )}
    </>
  );
}

export default Dashboard;