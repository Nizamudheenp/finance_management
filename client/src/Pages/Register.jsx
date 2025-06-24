import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../config/Api';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await API.post('/auth/register', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.message);
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4 font-bold">Register</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <input
                    type="text"
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className="mb-3 w-full p-2 border rounded"
                />
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
                <p className="mt-4 text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="text-blue-600 font-medium hover:underline hover:text-blue-800"
                    >
                        Login
                    </Link>
                </p>
            </form>

        </div>
    )
}

export default Register;
