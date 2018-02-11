import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    let classNames = 'Content';
  
    if ( this.props.classNames ) {
      classNames += ` ${this.props.classNames}`;
    }

    return (
      <main className={ classNames }>
        { this.props.children }
      </main>
    );
  }
}

export default Content;