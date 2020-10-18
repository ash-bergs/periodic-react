import React from 'react'; 
import { Route, Switch } from 'react-router-dom'; 

import '../styles/App.css';

import Dashboard from './Dashboard'; 
import Navbar from './Navbar'; 
import PeriodicTable from './PeriodicTable'; 

function App() {
  return (
    <div className="App">
    <Navbar /> 
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/periodic-table" component={PeriodicTable} /> 
      </Switch>
    </div>
  );
}

export default App;
