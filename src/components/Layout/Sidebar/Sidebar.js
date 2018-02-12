import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

import posts from '../Post/posts.js';

class Sidebar extends Component {
  render() {
    const activeClassName = 'is-active';
    const listItems = posts.map( item =>
      <li className='Sidebar-listItem' key={ item.id }>
        <NavLink 
          activeClassName={ activeClassName } 
          className='Sidebar-link' 
          to={ '/posts/' + item.id }
        >
          { item.title }
        </NavLink>
      </li>
    )

    let classNames = 'Sidebar Theme--tertiary';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <nav className={ classNames }>
        <div className='Sidebar-header'>Posts</div>

        <ul className='Sidebar-list'>
          { listItems }
        </ul>
      </nav>
    );
  }
}

export default Sidebar;