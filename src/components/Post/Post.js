import React, { Component } from 'react';
import './Post.css';

import PostHeader from './PostHeader.js';

class Post extends Component {
  render() {
    const title = this.props.title
    const author = this.props.author
    const date = this.props.date

    return (
      <article className='Post'>
        <PostHeader 
          title={ title }
          author={ author } 
          date={ date }
        />

        <div className="Post-prose">
          { this.props.children }
        </div>
      </article>
    );
  }
}

export default Post;