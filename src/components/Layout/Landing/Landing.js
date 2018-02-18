import React, { Component } from 'react';

import './Landing.css';

import PostCard from '../Post/PostCard.js';

import posts from '../Post/posts.js';

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <h1 className='Landing-title'>Welcome to Ze Blog.</h1>

        <PostCard
         date='02/13/2018'
         title='Lorem ipsum dolor sit'
         subtitle='Consecutir compulsit'
         author='Bill Murray'
        >
        </PostCard>
      </div>
    );
  }
}

export default Landing;