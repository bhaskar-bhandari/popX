import React from 'react'
import "./signup.css";
import { Link } from 'react-router-dom';
import HomeIcon from '../components/HomeIcon';

const Signup = () => {
    return (
        <div className='signup-container'>
            <div className="signup-box">
            <HomeIcon />
                <h2>Create your PopX account</h2>
                <form>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter full name" />

                    <label>Phone number</label>
                    <input type="tel" placeholder="Enter phone number" />

                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email address" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />

                    <label>Company Name</label>
                    <input type="text" placeholder="Enter company name" />

                    <Link to="/profile">
                        <button type="button">Create Account</button>
                    </Link>
                </form>
            </div>
           

        </div>
    )
}

export default Signup
