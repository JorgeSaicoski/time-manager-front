import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { setCredentials, setLoading, setError } from '../../store/slices/authSlice';
import { authService } from '../../services/authServices';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(state => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(null));
        dispatch(setLoading(true));

        try {
            const data = await authService.login(email, password);
            dispatch(setCredentials(data));
            navigate('/dashboard');
        } catch (err) {
            dispatch(setError(err.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="min-h-screen hero bg-secondary">
            <div className="hero-content flex-col w-full max-w-md">
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className="card-title text-3xl font-bold text-center justify-center">Welcome Back</h1>
                        <p className="text-center text-base-content/60">Please sign in to your account</p>

                        <form onSubmit={handleSubmit} className="form-control gap-4">
                            {error && (
                                <div className="alert alert-error">
                                    <ExclamationCircleIcon className="h-5 w-5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className={`btn btn-primary ${loading ? 'loading' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>

                            <div className="divider">OR</div>

                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => navigate('/register')}
                                    className="btn btn-link"
                                >
                                    Need an account? Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};