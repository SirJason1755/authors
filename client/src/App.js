import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { Link, Router} from '@reach/router';
import {useState} from 'react';
import axios from 'axios';
import Home from './views/Home';
import Add from './views/Add';
import Edit from './views/Edit';



function App() {
  return (
    <div className="App">
      <Router>
      <Home path = "/"/>
      <Add path ="/create"/>
      <Edit path = "/update/:_id"/>
      </Router>
      
    </div>
    
  );
}

export default App;
