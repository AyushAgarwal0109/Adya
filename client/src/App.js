import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SideNav from './components/layout/SideNav';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import NavbarMain from './components/layout/NavbarMain';
import AboutMain from './components/layout/About';
import Contact from './components/layout/ContactUs';

import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Categories from './components/pages/Categories';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <>
      <AuthState>
        <Router>
          <Fragment className='App'>
            {/* <Navbar /> */}
            <div>
              <Switch>
                <PrivateRoute exact path='/home'>
                  <Home />
                </PrivateRoute>
                <PrivateRoute exact path='/categories'>
                  <Categories />
                </PrivateRoute>
                <Route exact path='/'>
                  <NavbarMain />
                  <AboutMain />
                  <Contact />
                </Route>
                <Route exact path='/register'>
                  <NavbarMain />
                  <Register />
                </Route>
                <Route exact path='/login'>
                  <NavbarMain />
                  <Login />
                </Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AuthState>
    </>
  );
};

export default App;
