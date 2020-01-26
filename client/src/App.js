import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  './App.css';

 const App = () => {
  return (
  <Router>
  <div className="App">
  <Navbar />
  <Switch>
    <Route>
      asss
    </Route>
  </Switch>
  </div>
  </Router>
  )
}

export default App;