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
            <Link className="Sidebar-link" to="/something1">Something 1</Link>
          </li>

          <li className='Sidebar-listItem'>
            <Link className="Sidebar-link" to="/something2">Something 2</Link>
          </li>

          <li className='Sidebar-listItem'>
            <Link className="Sidebar-link" to="/something3">Something 3</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;