import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header classNames="App-header"></Header>

        <Sidebar classNames="App-sidebar"></Sidebar>

        <Content classNames="App-main"></Content>

        <Footer classNames="App-footer"></Footer>
      </div>
    );
  }
}

export default App;
