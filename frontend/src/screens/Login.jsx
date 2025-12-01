import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios.js";
import { useState } from "react";



export default function Login() {

    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate=useNavigate()
    function submitHandler(e){
        e.preventDefault()

        axios.post('/users/login',{
            email,password
        }).then((res)=>{
            console.log(res.data);
            navigate('/')
            
        }).catch((err)=>{
            console.log(err.response.data);
            
        })
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

        <form onSubmit={submitHandler} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Email</label>
            <input
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Password</label>
            <input
            onChange={(e)=> setPassword(e.target.value)}
              type="password"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
