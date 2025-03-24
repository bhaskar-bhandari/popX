import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomeIcon.css';

const HomeIcon = () => {
  return (
    <div className="home-icon">
      <Link to="/">
        <FaHome size={24} color="#7F56D9" />
      </Link>
    </div>
  );
};

export default HomeIcon;