import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    let classNames = 'Footer';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <footer className={ classNames }>
        I'm a footer.
      </footer>
    );
  }
}

export default Footer;