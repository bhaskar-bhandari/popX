import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';
import HomeIcon from '../components/HomeIcon';

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-box">
            <HomeIcon />
                <h2>Sign in to your <br /> PopX account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email address" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                    <Link to='/profile'>
                    <button type="submit">Login</button>
                    </Link>
                   
                </form>
            </div>
           
        </div>
    )
}

export default Login
