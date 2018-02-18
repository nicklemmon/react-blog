import React, { Component } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let classNames = 'Header';

    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <header className={ classNames }>
        <div className='Header-brand'>
          <Link className='Header-link' to="/">Platform Title</Link>
        </div>
      </header>
    );
  }
}

export default Header;