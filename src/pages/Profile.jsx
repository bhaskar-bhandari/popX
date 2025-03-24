import React from 'react'
import "./profile.css";
import HomeIcon from '../components/HomeIcon';

const Profile = () => {
    return (
        <div className='profile-page'>
            <div className="profile-card">
            <HomeIcon />
                <h2 className='profile-title'>Account Settings</h2>
                <div className="profile-info">
                    <img src='/facebook.jpg' alt="" className='profile-image' />
                    <div className="profile-text">
                        <h3 className="profile-name">Bhaskar Bhandari</h3>
                        <p className="profile-email">bhaskar.bhandari99@gmail.com</p>

                    </div>
                </div>
                <p className="profile-description">
                    Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam.
                </p>
            </div>
         
        </div>
    )
}

export default Profile
