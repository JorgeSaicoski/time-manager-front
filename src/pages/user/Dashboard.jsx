import { useSelector } from 'react-redux';
import { UserCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { toltalTimeService } from '../../services/totalTimeService';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  const healthCheck = async (e) => {
    console.log(user)
    e.preventDefault()
    try {
        console.log("Attempting health check...")
        const data = await toltalTimeService.getHealth(user.id)
        console.log(data)
    } catch (err) {
        console.error("Health check error:", {
            message: err.message,
            status: err.status,
            fullError: err
        })
    }
}
  
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
              <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
              <p className="text-base-content/60">Here your time management overview</p>
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
                <h2 className="card-title">Today Hours</h2>
                <p className="text-3xl font-bold">0h</p>
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
                <p className="text-3xl font-bold">0h</p>
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
                <tr>
                  <td colSpan="3" className="text-center text-base-content/60">
                    No recent activity
                  </td>
                </tr>
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
            <button className="btn btn-primary" onClick={healthCheck}>
              Start Timer
            </button>
            <button className="btn btn-secondary">
              Add Project
            </button>
            <button className="btn btn-accent">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;