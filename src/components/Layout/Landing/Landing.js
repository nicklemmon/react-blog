import React, { Component } from 'react';

import './Landing.css';
import cityImage from './city.jpg';

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <div className='Landing-hero'>
          <h1 className='Landing-title'>Welcome to Ze Blog.</h1>

          <img className='Landing-heroImg' src={ cityImage } alt='' />
        </div>
      </div>
    );
  }
}

export default Landing;