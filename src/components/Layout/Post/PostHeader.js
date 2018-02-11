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
    const subtitle = this.props.subtitle;
    const author = this.props.author;
    const date = this.props.date;

    return (
      <div className='PostHeader Theme--secondary'>
        <div className='PostHeader-titleGroup'>
          <h1
            ref={ ( title ) => { this.title = title } }
            className='PostHeader-title'
            tabIndex="-1"
          >
            { title }
          </h1>

          <div className='PostHeader-subtitle'>
            { subtitle }
          </div>
        </div>

        <div className='PostHeader-meta'>
          <img 
            className='PostHeader-avatar' 
            src='https://www.fillmurray.com/200/300' 
            alt={ author }
          />

          <div className='PostHeader-metaGroup'>
            <div className='PostHeader-author'>
              <em>by</em> <strong>{ author }</strong>
            </div>

            <div className='PostHeader-date'>
              { date }
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

export default PostHeader;