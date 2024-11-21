import { useDispatch, useSelector } from 'react-redux';
import { UserCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { totalTimeService } from '../../services/totalTimeService';
import { useEffect, useState } from 'react';
import { setTotalTime, setLoading, setError } from '../../store/slices/totalTimeSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const totalTime = useSelector(state => state.totalTime);
  const [isLoading, setIsLoading] = useState(false);


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
      };
      getTotalTime()
    }
  }, [user?.id, dispatch]); 


  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <UserCircleIcon className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Welcome, {user?.name || 'User'}!</h1>
              <p className="text-base-content/60">Heres your time management overview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="card-title">Todays Hours</h2>
                <p className="text-3xl font-bold">
                  {isLoading ? 'Loading...' : 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="card-title">This Week</h2>
                <p className="text-3xl font-bold">
                  {isLoading ? 'Loading...' : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Project</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="3" className="text-center">Loading...</td>
                  </tr>
                ) : totalTime?.recentActivity?.length ? (
                  totalTime.recentActivity.map((activity, index) => (
                    <tr key={index}>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center text-base-content/60">
                      No recent activity
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button 
              className="btn btn-primary"
              disabled={isLoading}
              onClick={() => {/* Add start timer logic */}}
            >
              Start Timer
            </button>
            <button 
              className="btn btn-secondary"
              disabled={isLoading}
              onClick={() => {/* Add project logic */}}
            >
              Add Project
            </button>
            <button 
              className="btn btn-accent"
              disabled={isLoading}
              onClick={() => {/* Add reports logic */}}
            >
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;