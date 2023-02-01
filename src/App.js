/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Home from './components/home';
import Quote from './components/quote';

class App extends React.Component {
  render() {
    return (
      <>
        <React.StrictMode>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/calculator" element={<Calculator />} />
              <Route exact path="/" element={<Home />} />

              <Route path="/quote" element={<Quote />} />
            </Routes>
          </Router>
        </React.StrictMode>
      </>
    );
  }
}

export default App;
