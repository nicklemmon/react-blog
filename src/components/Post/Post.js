import React, { Component } from 'react';
import './Post.css';

import PostHeader from './PostHeader.js';

class Post extends Component {
  focusTitle() {
    this.title.focus()
  }

  componentDidMount() {
    setTimeout( () => this.focusTitle(), 500 ) // focus delay helps with screen reader read/render delay
  }

  render() {
    const title = this.props.title
    const author = this.props.author
    const date = this.props.date

    return (
      <article className='Post'>
        {/* negative `tabindex` for focusing purposes */}
        <h1
          className='Post-title'
          ref={ ( title ) => { this.title = title; } }
          tabIndex="-1"
        >
          { title }
        </h1>

        <PostHeader 
          author={ author } 
          date={ date }
        />

        { this.props.children }
      </article>
    );
  }
}

export default Post;