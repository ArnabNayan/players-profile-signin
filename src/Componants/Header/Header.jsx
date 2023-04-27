import { Container } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        

               <nav className="navbar  text-primary-content flex-col bg-slate-400 lg:flex-row px-16 ">
                <div>
                    <a className="btn btn-ghost normal-case text-5xl font-bold text-indigo-100">Players Profile</a>
                   </div>
                    <div className='flex-col lg:flex-row gap-4 text-justify text-black-500 font-bold text-lg lg:px-72 mx-80'>
                    <Link to="/">Home</Link>
            <Link to="football">Football</Link>
            <Link to="cricket">Cricket</Link>
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
           
            </div>
               
           
            </nav>
                
              
            
            
               
                
        
         
            
            
           

        
    );
};

export default Header;