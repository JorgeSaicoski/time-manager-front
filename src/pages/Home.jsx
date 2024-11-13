import {
  ClockIcon,
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom';


const features = [
  {
    name: 'Time Tracking',
    description:
      'Track your time efficiently with our intuitive interface.',
    icon: ClockIcon,
  },
  {
    name: 'Analytics',
    description:
      'Get detailed insights into your time usage patterns.',
    icon: ChartBarIcon,
  },
  {
    name: 'Calendar Integration',
    description:
      'Calendar to summarise your job.',
    icon: CalendarIcon,
  },
  {
    name: 'Team Management',
    description:
      "Manage your team's time and projects in one place.",
    icon: UserGroupIcon,
  },
]

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-primary shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-text-primary text-2xl font-bold">
              Time Manager
            </div>
            <button
              onClick={() => navigate('/login')}
              className="btn bg-btn-accent-bg text-btn-accent-text hover:bg-btn-hover-bg hover:text-btn-primary-text"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Manage Your Time Effectively
          </h1>
          <p className="text-text-secondary text-xl mb-8 max-w-2xl mx-auto">
            Take control of your time with our comprehensive time management solution.
            Track, analyze, and optimize your daily activities.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-lg bg-btn-primary-bg text-btn-primary-text hover:bg-btn-hover-bg"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={clsx(
                'p-6 rounded-lg',
                'bg-secondary-accent',
                'transform transition-transform hover:scale-105'
              )}
            >
              <div
                className={clsx(
                  'w-12 h-12 rounded-full',
                  'bg-accent/10',
                  'flex items-center justify-center',
                  'mb-4'
                )}
              >
                <feature.icon
                  className="h-6 w-6 text-accent"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.name}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-text-secondary">
            © {new Date().getFullYear()} Time Manager. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home