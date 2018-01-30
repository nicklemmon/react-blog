import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={ Layout } />
      </Router>
    );
  }
}

export default App;
