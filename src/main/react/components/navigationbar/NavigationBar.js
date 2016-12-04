import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import Hexlogo from './hexlogo.png';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
        <img src={Hexlogo} role='presentation' />
        <a className="brand" href="#">hexagon</a>
      </Navbar.Brand>
    </Navbar.Header>
      </Navbar>
    );
  }
}

export default NavigationBar;
