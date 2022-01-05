import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// components
import MenuPage from "./components/MenuPage";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
         <Route path="/" element={<LandingPage />}/>
         <Route path="/MainMenu" element={<MenuPage />}/>
      
         </Routes>
       </div>
     </Router>
    );
  }
}

export default App;