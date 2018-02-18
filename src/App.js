import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout></Layout>
      </Router>
    );
  }
}

export default App;
