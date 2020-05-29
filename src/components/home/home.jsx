import React from 'react';

import './home.css';
import logo from '../../assets/logo_hikers_960x360.png';


function home() {
  return (
    <div className="home">
      <span className="title">Welcome to the Hikers React DEMO Project</span>
      <span className="subTitle">enjoy the travel</span>
      <img src={logo} className="home-logo" alt="logo" />
      <span>apps</span>
    </div>
  );
}

export default home;
