import React, { Component } from 'react';
import Hexlogo from './hexlogo.png';
import { Jumbotron } from 'react-bootstrap';
import Polygon from '../polygon/Polygon';
import './Hero.css';

class Hero extends Component {
  render() {
        return (
    <Jumbotron className="hero">
    <img src={Hexlogo} role="presentation" />
    <h1 className="hero-heading">HEXAGON</h1>
    <div>
      <p>
        <a className="primary-button">SIGN UP</a>
        <a className="hollow-button">LEARN MORE</a>
      </p>
    </div>
    <Polygon sides='6' percentage='1' radius='50' width='100' height='100'/>
    </Jumbotron>
    )};
}

export default Hero;
