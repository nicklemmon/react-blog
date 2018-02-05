import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    let classNames = 'Footer Theme--secondary';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <footer className={ classNames }></footer>
    );
  }
}

export default Footer;