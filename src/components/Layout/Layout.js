import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Layout.css';

import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';
import Landing from './Landing/Landing.js';
import Post from './Post/Post.js';

class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        <Header classNames='Layout-header'></Header>

        <Sidebar classNames='Layout-sidebar'></Sidebar>

        <Content classNames='Layout-main'>
          { this.props.children }

          <Route exact path='/' component={ Landing }></Route>

          <Route path='/posts/:postId' component={ Post }></Route>
        </Content>

        <Footer classNames='Layout-footer'></Footer>
      </div>
    );
  }
}

export default Layout;