import React, { Component } from 'react';
import './Post.css';

import PostHeader from './PostHeader.js';

class Post extends Component {
  render() {
    const posts = {
      post01: {
        title: "This is a post",
        subtitle: "And here is a subtitle",
        author: "Bill Murray",
        date: "02/11/2018",
        content: "Herro."
      },
      post02: {
        title: "This is post 2",
        subtitle: "This is a subtitle",
        author: "Bill Murray",
        date: "02/09/2018",
        content: "Herro again."
      },
      post03: {
        title: "This is post 3",
        subtitle: "The best of posts",
        author: "Bill Murray",
        date: "02/07/2018",
        content: "Hey there."
      }
    }

    const match = this.props.match
    const params = match.params
    const post = params.post
    const PostObject = posts[post]

    const title = PostObject.title
    const subtitle = PostObject.subtitle
    const author = PostObject.author
    const date = PostObject.date
    const content = PostObject.content

    return (
      <article className='Post'>
        <PostHeader 
          title={ title }
          subtitle={ subtitle }
          author={ author } 
          date={ date }
        />

        <div className="Post-prose">
          { content }
        </div>
      </article>
    );
  }
}

export default Post;