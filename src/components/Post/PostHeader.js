import React, { Component } from 'react';

import './PostHeader.css';

class PostHeader extends Component {
  render() {
    const author = this.props.author;
    const date = this.props.date;

    return (
      <div className='PostHeader Theme--secondary'>
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