import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeClassName = 'is-active';

    let classNames = 'Sidebar Theme--tertiary';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <nav className={ classNames }>
        <div className='Sidebar-header'>Posts</div>

        <ul className='Sidebar-list'>
          <li className='Sidebar-listItem'>
            <NavLink 
              activeClassName={ activeClassName } 
              className="Sidebar-link" 
              to="/post-1"
            >
              Post 1
            </NavLink>
          </li>

          <li className='Sidebar-listItem'>
            <NavLink 
              activeClassName={ activeClassName } 
              className="Sidebar-link" 
              to="/post-2"
            >
              Post 2
            </NavLink>
          </li>

          <li className='Sidebar-listItem'>
            <NavLink 
              activeClassName={ activeClassName } 
              className="Sidebar-link" 
              to="/post-3"
            >
              Post 3
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;