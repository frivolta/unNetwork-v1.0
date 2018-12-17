import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// See localstorage for jwt token
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearProfile } from './actions/profileActions';

import store from './store';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Landing from './Components/Layout/Landing';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

// Check for token
if(localStorage.jwtToken){
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expo
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and is Authenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    store.dispatch(clearProfile());
    // @Todo: clear current profile
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;