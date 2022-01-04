import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

function App() {
   render() {
     return(
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element= {<Home/>}>
          </Routes>
        </div>
      </Router>
     );
   }
}

export default App;
