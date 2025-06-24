import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../config/Api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await API.post('/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4 font-bold">Login</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mb-3 w-full p-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mb-3 w-full p-2 border rounded"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Login</button>
                <p className="mt-4 text-sm text-gray-600">
                    Dont have an account?{' '}
                    <Link
                        to="/register"
                        className="text-blue-600 font-medium hover:underline hover:text-blue-800"
                    >
                        Register
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default Login;
