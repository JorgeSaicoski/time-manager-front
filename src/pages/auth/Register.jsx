import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { setCredentials, setLoading, setError } from '../../store/slices/authSlice';
import { authService } from '../../services/authServices';


export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(state => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(null));
        dispatch(setLoading(true));

        try {
            const data = await authService.register(email, password, name);
            dispatch(setCredentials(data));
            navigate('/dashboard');
        } catch (err) {
            dispatch(setError(err.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="min-h-screen hero bg-primary text-text-secondary">
            <div className="hero-content flex-col w-full max-w-md">
                <div className="card w-full bg-secondary shadow-xl">
                    <div className="card-body">
                        <h1 className="card-title text-3xl font-bold text-center justify-center">Create Account</h1>
                        <p className="text-center text-text-primary">Sign up for a new account</p>

                        <form onSubmit={handleSubmit} className="form-control gap-4">
                            {error && (
                                <div className="alert alert-error">
                                    <ExclamationCircleIcon className="h-5 w-5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text-secondary">Name</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text-secondary">Email</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text-secondary">Password</span>
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password (min. 8 characters)"
                                    className="input input-bordered"
                                    minLength={8}
                                />
                                <label className="label">
                                    <span className="label-text-accent">Must be at least 8 characters</span>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className={`btn btn-primary ${loading ? 'loading' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Creating account...' : 'Create account'}
                                </button>
                            </div>

                            <div className="divider">OR</div>

                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => navigate('/login')}
                                    className="btn btn-link"
                                >
                                    Already have an account? Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
