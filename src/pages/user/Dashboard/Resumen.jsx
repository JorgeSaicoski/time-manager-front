import { UserCircleIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Resumen = ({ user }) => {
    const navigate = useNavigate();

    const goToHelper = () => {
        navigate('/user/helper')
    }


    return (
        <div className="space-y-6 p-3 bg-primary min-h-screen text-text-primary">
            {/* Welcome Section */}
            <div className="card bg-secondary shadow-xl">
                <div className="card-body">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <UserCircleIcon className="w-10 h-10 text-text-secondary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Welcome, {user?.name || 'User'}!</h1>
                            <p className="text-text-secondary">Heres your time management overview</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card bg-secondary shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                    <CalendarIcon className="w-6 h-6 text-text-primary" />
                                </div>
                                <div>

                                    <h2 className="card-title">Star new total time</h2>
                                    <p className="font-bold text-sm">
                                        Track your total work hours, including project time, breaks, and brief interruptions, all in one comprehensive view.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card bg-secondary shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                    <CalendarIcon className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h2 className="card-title">Go to Calendar</h2>
                                    <p className="font-bold text-sm">
                                        Track your daily resolutions, whether they are tickets, cases, or calls - easily monitor and report your task completions to stay accountable and organized.
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                </div>


                <div className="card bg-secondary shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Projects</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr className='text-text-secondary'>
                                        <th>Date</th>
                                        <th>Project</th>
                                        <th>Hours</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card bg-secondary shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Quick Actions</h2>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="btn btn-primary"
                                onClick={goToHelper}
                            >
                                Help
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => {/* Add project logic */ }}
                            >
                                Add Project
                            </button>
                            <button
                                className="btn btn-accent"
                                onClick={() => {/* Add reports logic */ }}
                            >
                                View Reports
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resumen;