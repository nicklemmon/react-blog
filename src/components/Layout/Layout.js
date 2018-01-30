import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Layout.css';

import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js';

import Something1 from '../../posts/Something1.js';
import Something2 from '../../posts/Something2.js';
import Something3 from '../../posts/Something3.js';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header classNames="Layout-header"></Header>

        <Sidebar classNames="Layout-sidebar"></Sidebar>

        <Content classNames="Layout-main">
          { this.props.children }

          <Route path='/something1' component={ Something1 }></Route>

          <Route path='/something2' component={ Something2 }></Route>

          <Route path='/something3' component={ Something3 }></Route>
        </Content>

        <Footer classNames="Layout-footer"></Footer>
      </div>
    );
  }
}

export default Layout;