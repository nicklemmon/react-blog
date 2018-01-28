import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    let classNames = 'Sidebar';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <nav className={ classNames }>
        Sidebar! Sidebaaaaaaar.
      </nav>
    );
  }
}

export default Sidebar;