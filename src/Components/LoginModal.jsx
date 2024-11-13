import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import clsx from 'clsx'

// eslint-disable-next-line react/prop-types
const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt with:', formData)
  }

  if (!isOpen) return null

  return (
    <div className={clsx("modal", isOpen && "modal-open")}>
      <div className="modal-box bg-secondary">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          <XMarkIcon className="h-6 w-6 text-text-primary" />
        </button>

        {/* Modal title */}
        <h3 className="text-lg font-bold text-text-primary mb-4">
          Login
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-text-primary">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered w-full bg-secondary-accent text-text-primary"
              value={formData.email}
              onChange={(e) => 
                setFormData(prev => ({
                  ...prev,
                  email: e.target.value
                }))
              }
              required
            />
          </div>

          {/* Password field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-text-primary">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-secondary-accent text-text-primary"
              value={formData.password}
              onChange={(e) => 
                setFormData(prev => ({
                  ...prev,
                  password: e.target.value
                }))
              }
              required
            />
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-block bg-btn-primary-bg text-btn-primary-text hover:bg-btn-hover-bg"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Modal backdrop */}
      <div className="modal-backdrop" onClick={onClose}>
        <button className="cursor-default">close</button>
      </div>
    </div>
  )
}

export default LoginModal