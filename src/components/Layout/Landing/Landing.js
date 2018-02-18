import React, { Component } from 'react';

import './Landing.css';

import PostCard from '../Post/PostCard.js';

import posts from '../Post/posts.js';

class Landing extends Component {
  render() {
    const postCards = posts.map( item =>
      <li className='Sidebar-listItem' key={ item.id }>
        <PostCard
         date={ item.date }
         title={ item.title }
         subtitle={ item.subtitle }
         author={ item.author }
         id={ item.id }
        />
      </li>
    );

    return (
      <div className='Landing'>
        <h1 className='Landing-title'>Welcome to Ze Blog.</h1>

        <ul className='Landing-list'>
          { postCards }
        </ul>
      </div>
    );
  }
}

export default Landing;