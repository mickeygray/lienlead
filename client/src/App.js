import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import LienState from './context/contact/LienState';
import AuthState from './context/auth/AuthState';
import LeadState from './context/lead/LeadState';
import AlertState from './context/alert/AlertState';
import './App.css';
import CallState from './context/call/CallState';


const App = () => {
  return (
    <AuthState>
    <LeadState>
      <LienState>
        <CallState>
        
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
         </AlertState>
        
       </CallState>
      </LienState>
      </LeadState>
    </AuthState>
  );
};

export default App;
