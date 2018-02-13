import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MdInsertDriveFile from 'react-icons/lib/md/insert-drive-file';

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
    );
    const headerContent = 'Posts';
    let classNames = 'Sidebar Theme--tertiary';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <nav className={ classNames }>
        <div className='Sidebar-header'>
          <MdInsertDriveFile className='Sidebar-headerIcon'/>

          { headerContent }
        </div>

        <ul className='Sidebar-list'>
          { listItems }
        </ul>
      </nav>
    );
  }
}

export default Sidebar;