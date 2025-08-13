import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Login</h2>
            <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
            />
            <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-md font-semibold text-base hover:from-indigo-600 hover:to-purple-600 transition-colors"
            >
                Sign In
            </button>
            <div className="text-center text-sm">
                <span className="text-gray-500">Don't have an account? </span>
                <Link to={'/signup'} className="text-indigo-500 font-semibold hover:underline">Sign Up</Link>
            </div>
        </form>
    </div>
)}

export default Login;