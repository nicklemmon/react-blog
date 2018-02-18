import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MdArrowForward from 'react-icons/lib/md/arrow-forward';

import './PostCard.css';

class PostCard extends Component {
  render() {
    const date = this.props.date;
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const author = this.props.author;
    const id = this.props.id;

    let classNames = 'PostCard';

    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <div className={ classNames } role='region'>
        <div className='PostCard-content'>
          <div className='PostCard-date'>{ date }</div>

          <h2 className='PostCard-title'>{ title }</h2>

          <div className='PostCard-subtitle'>{ subtitle }</div>
        </div>

        <div className='PostCard-footer Theme--secondary'>
          <div className='PostCard-author'>
            <em>By </em>
            
            { author }
          </div>

          <Link 
          className='PostCard-link'
          to={ '/posts/' + id }
          >
            Read post 

            <MdArrowForward />
          </Link>
        </div>
      </div>
    );
  }
}

export default PostCard;