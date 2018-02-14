import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MdChevronRight from 'react-icons/lib/md/chevron-right';

import './Sidebar.css';

import posts from '../Post/posts.js';

class Sidebar extends Component {
  constructor( props ) {
    super( props );

    this.toggleNav = this.toggleNav.bind( this );

    this.state = { isExpanded: false }
  }

  toggleNav() {
    this.setState( { isExpanded: !this.state.isExpanded } )
  }

  render() {
    const activeClassName = 'is-active';
    const headerContent = 'Posts';
    const isExpanded = this.state.isExpanded;
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

    return (
      <nav className={ 'Sidebar Theme--tertiary ' + ( isExpanded ? 'is-expanded' : 'is-collapsed' ) }>
        <div className='Sidebar-header'>
          { headerContent }

          <button onClick={ this.toggleNav } className={ 'Sidebar-button ' + ( isExpanded ? 'is-expanded' : 'is-collapsed' ) } aria-label='toggle navigation' aria-controls='navigation' aria-expanded={ isExpanded }>
            <MdChevronRight className='Sidebar-chevronIcon'/>
          </button>
        </div>

        <ul className='Sidebar-list' id='navigation'>
          { listItems }
        </ul>
      </nav>
    );
  }
}

export default Sidebar;