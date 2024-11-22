import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timer, Coffee, PauseCircle, PlayCircle, StopCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const CurrentTotalTime = () => {
  const [currentState, setCurrentState] = useState('idle'); // idle, working, break, brb
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

  const finishTotalTime = () => {
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
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Current Total Time</span>
            <Button 
              variant="destructive" 
              onClick={finishTotalTime}
              className="flex items-center gap-2"
            >
              <StopCircle size={16} />
              Finish Total Time
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Time Summary */}
            <div className="grid grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="font-semibold text-sm">Total Time</div>
                <div className="text-lg">{getTotalTimeElapsed()}</div>
              </Card>
              <Card className="p-4">
                <div className="font-semibold text-sm">Work Time</div>
                <div className="text-lg">{formatTime(accumulatedTimes.work)}</div>
              </Card>
              <Card className="p-4">
                <div className="font-semibold text-sm">Break Time</div>
                <div className="text-lg">{formatTime(accumulatedTimes.break)}</div>
              </Card>
              <Card className="p-4">
                <div className="font-semibold text-sm">BRB Time</div>
                <div className="text-lg">{formatTime(accumulatedTimes.brb)}</div>
              </Card>
            </div>

            {/* Current Activity Status */}
            {currentState !== 'idle' && (
              <Alert className="mt-4">
                <Timer className="h-4 w-4" />
                <AlertTitle>Currently {currentState}</AlertTitle>
                <AlertDescription>
                  Started at {new Date(currentActivity).toLocaleTimeString()}
                  {currentState === 'working' && selectedProject && (
                    <span className="ml-2">- Project: {selectedProject.name}</span>
                  )}
                </AlertDescription>
              </Alert>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              {currentState === 'idle' ? (
                <Button 
                  onClick={startWorkTime}
                  className="flex items-center gap-2"
                >
                  <PlayCircle size={16} />
                  Start Working
                </Button>
              ) : currentState === 'working' ? (
                <div className="flex gap-4">
                  <Button 
                    onClick={startBreak}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <PauseCircle size={16} />
                    Take Break
                  </Button>
                  <Button 
                    onClick={startBrb}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <Coffee size={16} />
                    BRB
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={startWorkTime}
                  className="flex items-center gap-2"
                >
                  <PlayCircle size={16} />
                  Resume Working
                </Button>
              )}
              
              {currentState !== 'idle' && (
                <Button 
                  variant="outline" 
                  onClick={stopCurrentActivity}
                  className="flex items-center gap-2"
                >
                  <StopCircle size={16} />
                  Stop {currentState}
                </Button>
              )}
            </div>

            {/* Project Selection */}
            {currentState === 'working' && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">Select Project</label>
                <select 
                  className="w-full p-2 border rounded-md"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentTotalTime;