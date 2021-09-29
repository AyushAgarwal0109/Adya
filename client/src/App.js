import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import NavbarMain from './components/layout/NavbarMain';
import AboutMain from './components/layout/About';
import Contact from './components/layout/ContactUs';

import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';


import './App.css';
import ContactUs from './components/layout/ContactUs';
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
          <Navbar />
          <div className='container'>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/categories' component={Categories} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
    {/* <NavbarMain />
    <AboutMain />
    <Contact /> */}

    </>
  );
};

export default App;
