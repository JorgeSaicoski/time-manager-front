import React from 'react';

const Helper = () => {
    const categories = [
        {
            title: 'TotalTime',
            description: "Tracks your entire work period, including all work sessions, breaks, and brief interruptions. You can have multiple TotalTime sessions per day for different contexts - like working for different companies, doing freelance work, or when taking extended breaks. Think of it as the container that holds all your day's activities.",
            examples: "Example: Starting a TotalTime at 9am, taking a lunch break at noon, and ending at 5pm would all be in one TotalTime session. If you later do freelance work from 7pm-9pm, that would be a separate TotalTime."
        },
        {
            title: 'WorkTime',
            description: "Represents your active working periods within a TotalTime session. WorkTime tracks when you're actually working on tasks or projects. You can switch between different projects within the same WorkTime session without stopping it - perfect for multitasking or moving between related tasks.",
            examples: "Example: Within a 9am-5pm TotalTime, you might have a WorkTime from 9am-12pm working on Project A and B, then another WorkTime from 1pm-5pm after lunch."
        },
        {
            title: 'Break',
            description: "Used for unpaid, official breaks when you're completely stepping away from work. These pauses don't count towards your paid time and clearly separate your work periods.",
            examples: "Example: Lunch breaks, scheduled breaks, or when you're done for a period but plan to return later."
        },
        {
            title: 'BRB (Be Right Back)',
            description: "For short, paid interruptions during your work time. BRB time is still considered part of your work hours but tracks when you're temporarily away or between tasks. This time can be distributed across projects later if needed.",
            examples: "Example: Quick bathroom breaks, getting coffee, brief personal calls, or waiting for a task to be assigned."
        },
        {
            title: 'Projects',
            description: "Organize and track work by specific projects or clients. Projects can have their own tasks, time tracking, and cost calculations. Multiple projects can be active within the same WorkTime, making it easy to track time spent on different initiatives.",
            examples: "Example: Client websites, internal tasks, or specific campaigns - each with their own tasks, deadlines, and time allocation."
        },
        {
            title: 'Resolution Tracker',
            description: "Track completed tasks, tickets, cases, or any countable work units. Perfect for keeping track of your daily accomplishments and generating reports of your completed work.",
            examples: "Example: Number of support tickets resolved, customer calls handled, or cases processed in a day."
        },
        {
            title: 'Summary',
            description: "A comprehensive calendar view of your work activities. Review, analyze, and adjust your time records. Access detailed breakdowns of time spent on projects, breaks, and overall work patterns.",
            examples: "Example: See that on Monday you worked 8 hours, including 6.5 hours on projects, 1 hour of breaks, and 30 minutes of BRB time."
        },
        {
            title: 'Companies',
            description: "Organize work and projects by different companies or clients. Each company can have its own projects, team members, and time tracking requirements.",
            examples: "Example: Track time separately for your main job, freelance clients, or different departments within a large organization."
        }
    ];

    return (
      <div className="bg-primary shadow-xl min-h-screen">
          <div className="card-body">
              <h2 className="card-title text-2xl text-text-primary mb-4">Time Management Guide</h2>
              <div className="grid gap-4">
                  {categories.map((category, index) => (
                      <div key={index} className="collapse collapse-plus bg-secondary hover:bg-secondary-accent transition-colors">
                          <input type="radio" name="timer-accordion" /> 
                          <div className="collapse-title text-xl font-medium text-text-primary">
                              {category.title}
                          </div>
                          <div className="collapse-content bg-secondary-accent">
                              <p className="text-text-primary mb-4">{category.description}</p>
                              <p className="text-text-secondary text-sm italic">{category.examples}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Helper;