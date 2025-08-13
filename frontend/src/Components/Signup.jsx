import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

const [name,setName]=useState('')
const [password,setPassword]=useState('')
const [email,setEmail]=useState('')
const [errmsg,setErrmsg]=useState('')

const handleSubmit=async(e)=>{

    e.preventDefault();

    const user = {name, email, password}

   try {

    const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
    })

    if(!res.ok)
    {
       console.log('Somthing went wrong')
       const srror = await res.json();
       setErrmsg(srror.Error)
       return
    }
    setErrmsg('')
    console.log('added successful')
    
   } catch (err) {
    
    setErrmsg(err)

   }

}

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your name"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                    Sign Up
                </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Already have an account?{" "}
                
                    <Link to={'/'}  className="text-indigo-600 hover:underline">Login</Link>
                
            </p>
            {errmsg && <div className=' text-red-400'>{errmsg}</div>}
        </div>
    </div>
)
}

export default Signup