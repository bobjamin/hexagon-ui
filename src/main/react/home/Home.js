import React, { Component } from 'react';
import './Home.css';
import Navbar from '../components/navigationbar/NavigationBar';
import Dashboard from '../components/dashboard/Dashboard';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default Home;
