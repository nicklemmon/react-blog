import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './Post.css';

import PostHeader from './PostHeader.js';
import posts from './posts.js';

class Post extends Component {
  render() {
    const match = this.props.match;
    const params = match.params;
    const postId = params.postId;
    const PostObj = posts.find( ( post ) => post.id === postId ); // post data from imported Posts object
    const title = PostObj.title;
    const subtitle = PostObj.subtitle;
    const author = PostObj.author;
    const date = PostObj.date;
    const content = PostObj.content;

    const formatMarkdown = ( markdownStr ) => {
      const str = markdownStr;
      const lines = str.split( '\n' );

      for( var i = 0; i < lines.length; i++) {
        lines[i] = `\n${lines[i]}`;
      }

      console.log( lines.join('\n') );

      return lines.join('\n');
    }

    const formattedContent = formatMarkdown( content );

    return (
      <article className='Post'>
        <PostHeader 
          title={ title }
          subtitle={ subtitle }
          author={ author } 
          date={ date }
        />

        <div className="Post-prose">
          <ReactMarkdown source={ formattedContent } />
        </div>
      </article>
    );
  }
}

export default Post;