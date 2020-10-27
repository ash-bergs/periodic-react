import React from 'react'; 
import { Route, Switch } from 'react-router-dom'; 

import '../styles/App.css';

import Dashboard from './Dashboard'; 
import FlashCards from './FlashCards';
import Navbar from './Navbar'; 
import PeriodicTable from './PeriodicTable'; 
import StudyList from './StudyList'; 

function App() {
  return (
    <div className="App">
    <Navbar /> 
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/study" component={StudyList} />
        <Route path="/flashcards" component={FlashCards}/>
        <Route exact path="/learn" component={PeriodicTable} /> 
      </Switch>
    </div>
  );
}

export default App;
