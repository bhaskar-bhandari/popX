import React from 'react'
import { Link } from 'react-router-dom'
import "./landingScreen.css";
import HomeIcon from '../components/HomeIcon';


const LandingScreen = () => {
   
    return (
        <>
            <div className='container'>
            <HomeIcon />
            <h1>welcome to popX</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           
            <Link to="/signup">
                <button className='primary'>Create Account</button>
            </Link>

            <Link to="/login">
                <button className='secondary'>Already Registered? Login</button>
            </Link>
           

        </div>
      
        </>
       
        
    )
}

export default LandingScreen
