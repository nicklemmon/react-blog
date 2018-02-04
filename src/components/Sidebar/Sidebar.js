import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    let classNames = 'Sidebar Theme--secondary';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <nav className={ classNames }>
        <ul className='Sidebar-list'>
          <li className='Sidebar-listItem'>
            <Link className='Sidebar-link' to="/">Home</Link>
          </li>

          <li className='Sidebar-listItem'>
            <Link className="Sidebar-link" to="/post-1">Post 1</Link>
          </li>

          <li className='Sidebar-listItem'>
            <Link className="Sidebar-link" to="/post-2">Post 2</Link>
          </li>

          <li className='Sidebar-listItem'>
            <Link className="Sidebar-link" to="/post-3">Post 3</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;