import React, { useContext } from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [errmsg,setErrmsg]=useState('')
    const navigate = useNavigate()
    const {state, dispatch} = useContext(AuthContext)


 const handleClick=async(e)=>{

    e.preventDefault();

    const user ={email, password}

    

    try {

        const res = await fetch('/api/auth/login',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(user) 
        })

        if(!res.ok || !res.status === 200){

            const geterror = await res.json()
            setErrmsg(geterror.message)
            return;

        }
        const data = await res.json()
        setErrmsg('');
        localStorage.setItem('Token',JSON.stringify(data))
        dispatch({type:'LOGIN',payload:data})
        navigate('/chat')
       
        
    } catch (error) {

        setErrmsg(errmsg)

        
    }


 }


return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
        <form onSubmit={handleClick} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Login</h2>
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
            />
            <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
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
                {errmsg && <div className=' text-red-400 pt-2'>{errmsg}</div>}
            </div>
        </form>
    </div>
)}

export default Login;