import React, { Component } from 'react';

class Post extends Component {
  focusTitle() {
    this.title.focus()
  }

  componentDidMount() {
    setTimeout( () => this.focusTitle(), 500 ) // focus delay helps with screen reader read/render delay
  }

  render() {
    return (
      <article>
        {/* negative `tabindex` for focusing purposes */}
        <h1
          ref={ ( title ) => { this.title = title; } }
          tabIndex="-1"
        >
          { this.props.title }
        </h1>

        { this.props.children }
      </article>
    );
  }
}

export default Post;