import React from 'react';
import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/PetDetails">
        Add Pet
      </a>
      <a className="menu-item" href="/">
        Book Your Appointment
      </a>
      <a className="menu-item" href="/">
        Previous Bookings
      </a>
    </Menu>
  );
};