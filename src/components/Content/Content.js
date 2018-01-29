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
        <h1 class='Content-heading'>This is the main heading</h1>
      </main>
    );
  }
}

export default Content;