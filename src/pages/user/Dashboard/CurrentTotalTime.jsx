import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalTimeService } from '@services/totalTimeService';
import {
  ClockIcon,
  PlayIcon,
  StopIcon,
  PauseIcon,
  ArrowPathIcon,
  StopCircleIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/outline';
import { closeTotalTime } from '../../../store/slices/totalTimeSlice';

const selectTotalTime = state => ({
  id: state.totalTime.id,
  userId: state.totalTime.userId,
  companyId: state.totalTime.companyId,
  startTime: state.totalTime.startTime,
  closed: state.totalTime.closed
});
const selectUser = state => state.auth.user;

const CurrentTotalTime = () => {
  const dispatch = useDispatch();
  const totalTime = useSelector(selectTotalTime);
  const user = useSelector(selectUser)
  const [currentState, setCurrentState] = useState('idle'); 
  const [totalTimeStarted, setTotalTimeStarted] = useState(new Date().toISOString());
  const [currentActivity, setCurrentActivity] = useState(null);
  const [accumulatedTimes, setAccumulatedTimes] = useState({
    work: 0,    
    break: 0,
    brb: 0
  });
  const [selectedProject, setSelectedProject] = useState(null);


  const mockProjects = [
    { id: 1, name: "Website Redesign" },
    { id: 2, name: "Mobile App Development" },
    { id: 3, name: "Marketing Campaign" }
  ];

  const startWorkTime = () => {
    setCurrentState('working');
    setCurrentActivity(new Date());
  };

  const startBreak = () => {
    setCurrentState('break');
    setCurrentActivity(new Date());
  };

  const startBrb = () => {
    setCurrentState('brb');
    setCurrentActivity(new Date());
  };

  const stopCurrentActivity = () => {
    if (currentActivity) {
      const duration = Math.floor((new Date() - new Date(currentActivity)) / 60000);
      setAccumulatedTimes(prev => ({
        ...prev,
        [currentState === 'working' ? 'work' : currentState]: prev[currentState === 'working' ? 'work' : currentState] + duration
      }));
    }
    setCurrentState('idle');
    setCurrentActivity(null);
    setSelectedProject(null);
  };

  const finishTotalTime = async () => {
    try {
      const response = await totalTimeService.closeTotalTime(user.id)
      dispatch(closeTotalTime())
    } catch (error) {
      console.log(error)
      
    }
    stopCurrentActivity();
    setTotalTimeStarted(null);
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getTotalTimeElapsed = () => {
    const start = new Date(totalTimeStarted);
    const now = new Date();
    return formatTime(Math.floor((now - start) / 60000));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div className="card bg-secondary text-text-primary shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">Current Total Time</h2>
            <button 
              className="btn btn-error btn-sm gap-2"
              onClick={finishTotalTime}
            >
              <StopCircleIcon className="w-6 h-6" />
              Finish Total Time
            </button>
          </div>

          {/* Time Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Total Time</div>
                <div className="stat-value text-lg">{getTotalTimeElapsed()}</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Work Time</div>
                <div className="stat-value text-lg">{formatTime(accumulatedTimes.work)}</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Break Time</div>
                <div className="stat-value text-lg">{formatTime(accumulatedTimes.break)}</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">BRB Time</div>
                <div className="stat-value text-lg">{formatTime(accumulatedTimes.brb)}</div>
              </div>
            </div>
          </div>

          {/* Current Activity Status */}
          {currentState !== 'idle' && (
            <div className="alert alert-info shadow-lg">
              <ClockIcon className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Currently {currentState}</h3>
                <div className="text-xs">
                  Started at {new Date(currentActivity).toLocaleTimeString()}
                  {currentState === 'working' && selectedProject && (
                    <span className="ml-2">- Project: {selectedProject.name}</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 my-4">
            {currentState === 'idle' ? (
              <button 
                className="btn btn-primary gap-2"
                onClick={startWorkTime}
              >
                <PlayIcon className="w-4 h-4" />
                Start Working
              </button>
            ) : currentState === 'working' ? (
              <div className="flex flex-wrap gap-4">
                <button 
                  className="btn btn-secondary gap-2"
                  onClick={startBreak}
                >
                  <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
                  Take Break
                </button>
                <button 
                  className="btn btn-secondary gap-2"
                  onClick={startBrb}
                >
                  <PauseIcon className="w-4 h-4" />
                  BRB
                </button>
              </div>
            ) : (
              <button 
                className="btn btn-primary gap-2"
                onClick={startWorkTime}
              >
                <ArrowPathIcon className="w-4 h-4" />
                Resume Working
              </button>
            )}
            
            {currentState !== 'idle' && (
              <button 
                className="btn btn-outline gap-2"
                onClick={stopCurrentActivity}
              >
                <StopIcon className="w-4 h-4" />
                Stop {currentState}
              </button>
            )}
          </div>

          {/* Project Selection */}
          {currentState === 'working' && (
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Project</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={selectedProject?.id || ''}
                onChange={(e) => {
                  const project = mockProjects.find(p => p.id === parseInt(e.target.value));
                  setSelectedProject(project);
                }}
              >
                <option value="">Select a project...</option>
                {mockProjects.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentTotalTime;