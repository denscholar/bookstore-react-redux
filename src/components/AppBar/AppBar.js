import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { MenuOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="navbar panel-bg">
      <MenuOutlined className="toggle" onClick={() => setShowInput(!showInput)} style={{ color: 'black' }} />
      <div>
        <Link to="/" className="logo-title Bookstore-CMS">Bookstore CMS</Link>
      </div>
      <div className="left" id={showInput ? 'hidden' : ''}>
        <ul className="nav-link">
          <li className="nav-item"><Link to="/">Books</Link></li>
          <li className="nav-item"><Link to="/categories">Categories</Link></li>
        </ul>
        <div className="avatar">
          <Avatar className="avatar" />
        </div>
      </div>
    </div>

  );
};

export default AppBar;
