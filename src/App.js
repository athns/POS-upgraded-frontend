import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  link
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import "./App.css";


// components
import Signup from './components/Signup';
import About from './components/About';

import Profile from './components/Profile';
import Welcome from './components/Welcome';
import MenuPage from "./components/MenuPage";
import LandingPage from "./components/LandingPage";
import Ghost from "./components/Ghost";
import Login from './components/Login';
import DrinkOptions from "./components/DrinkOptions";
import SandwichOptions from "./components/SandwichOptions";
import DesertOptions from "./components/DesertOptions";
import PlaceOrderPage from "./components/AdminSubmitPage";


const PrivateRoute = ({ children }) => {
  let token = localStorage.getItem('jwtToken');
  // console.log('===> Hitting a Private Route');
  return token ? children : <Navigate to="/login" replace />;
}

function Apps() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      // console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    // console.log('===> nowCurrentUser is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  //   return (
  //     <div className="App">
  //       <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
  //       <div className="container mt-5">
  //         <Routes>
  //           <Route path='/signup' component={Signup} />
  //           <Route 
  //             path="/login"
  //             render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
  //           />
  //           <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
  //           <Route exact path="/" component={Welcome} />
  //           <Route path="/about" component={About} />
  //         </Routes>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // }


  // class App extends Component {
  //   render() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/MainMenu" element={<MenuPage />} />

          <Route path="/ghost" element={<Ghost />} />
          <Route path="/drinkOptions" element={<DrinkOptions />} />
          <Route path="/sandwichOptions" element={<SandwichOptions />} />
          <Route path="/desertOptions" element={<DesertOptions />} />
          <Route path="/PlacedOrderPage" element={<PlaceOrderPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile user={currentUser} handleLogout={handleLogout} />
              </PrivateRoute>
            }
          />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />


        </Routes>

      </Router>
      {/* <Footer /> */}
    </div>
  );
}


export default Apps;
