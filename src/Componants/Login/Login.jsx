import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero max-h-screen  bg-base-200">     
  <div className="hero-content">
  <h1 className="text-5xl font-bold ">Login now!</h1>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email"name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="enter your password" name="password"className="input input-bordered" />
          <label className="label">
        <a href="#" className="label-text-alt link link-hover text-sm"> Do not Have an account?create <Link className='text-blue-500' to="/signup">Signup</Link></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
    
  </div>
 
</div>
    );
};

export default Login;