import React, { Component } from 'react';

import Post from '../components/Post/Post.js';

class Post1 extends Component {
  render() {
    return (
      <Post 
        title="Post 1!"
        author="Bill Murray"
        date="12/04/17"
      />
    )
  }
}

export default Post1;