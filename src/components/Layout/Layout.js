import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Layout.css';

import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js';

import Post1 from '../../posts/Post1.js';
import Post2 from '../../posts/Post2.js';
import Post3 from '../../posts/Post3.js';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header classNames="Layout-header"></Header>

        <Sidebar classNames="Layout-sidebar"></Sidebar>

        <Content classNames="Layout-main">
          { this.props.children }

          <Route path='/post-1' component={ Post1 }></Route>

          <Route path='/post-2' component={ Post2 }></Route>

          <Route path='/post-3' component={ Post3 }></Route>
        </Content>

        <Footer classNames="Layout-footer"></Footer>
      </div>
    );
  }
}

export default Layout;