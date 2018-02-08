import React, { Component } from 'react';

import './PostHeader.css';

class PostHeader extends Component {
  focusTitle() {
    this.title.focus()
  }

  componentDidMount() {
    setTimeout( () => this.focusTitle(), 250 ) // focus delay helps with screen reader read/render delay
  }

  render() {
    const title = this.props.title;
    const author = this.props.author;
    const date = this.props.date;

    return (
      <div className='PostHeader Theme--secondary'>
        <h1
          ref={ ( title ) => { this.title = title } }
          className='PostHeader-title'
          tabIndex="-1"
        >
          { title }
        </h1>

        <img 
          className='PostHeader-avatar' 
          src='https://www.fillmurray.com/200/300' 
          alt={ author }
        />

        <div className='PostHeader-author'>
          by { author }
        </div>

        <div className='PostHeader-date'>
          on { date }
        </div>
      </div>  
    )
  }
}

export default PostHeader;