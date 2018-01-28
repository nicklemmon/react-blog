import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    let classNames = 'Header';

    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <header className={ classNames }>
        <div className='Header-brand'>
          Citrus Blog
        </div>
      </header>
    );
  }
}

export default Header;