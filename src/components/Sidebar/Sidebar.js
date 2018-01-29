import React, { Component } from 'react';
import './Sidebar.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Sidebar extends Component {
  render() {
    const Child = ( { match } ) => (
      <div>
        <h3>ID: { match.params.id }</h3>
      </div>
    )

    let classNames = 'Sidebar Theme--secondary';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <Router>
        <nav className={ classNames }>
          <ul className='Sidebar-list'>
            <li className='Sidebar-listItem'>
              <Link to="/something-1">Something 1</Link>
            </li>

            <li className='Sidebar-listItem'>
              <Link to="/something-2">Something 2</Link>
            </li>

            <li className='Sidebar-listItem'>
              <Link to="/something-3">Something 3</Link>
            </li>
          </ul>

          <Route path="/:id" component={ Child }/>
        </nav>
      </Router>
    );
  }
}

export default Sidebar;