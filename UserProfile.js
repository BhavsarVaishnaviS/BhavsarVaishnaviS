import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css'; 

const UserProfile = () => {
  const { username } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-profile">
      {/* <div className="user-info">
        <span>Welcome, {username}</span>
      </div> */}
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          Username
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#">Edit</a>
            <a href="#">Email</a>
            <a href="#">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
