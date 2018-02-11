import React, { Component } from 'react';
import './Post.css';

import PostHeader from './PostHeader.js';

class Post extends Component {
  render() {
    const match = this.props.match
    const params = match.params
    const title = params.title
    const subtitle = this.props.subtitle
    const author = this.props.author
    const date = this.props.date

    return (
      <article className='Post'>
        <PostHeader 
          title={ title }
          subtitle={ subtitle }
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