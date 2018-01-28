import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    let classNames = 'Post';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <article className={ classNames }>
        Post post post post post.
      </article>
    );
  }
}

export default Post;