import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListGameComponent from './components/ListGameComponent';
import CreateGameComponent from './components/CreateGameComponent';
import ViewGameComponent from './components/ViewGameComponent';
import UpdateGameComponent from './components/UpdateGameComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListGameComponent}></Route>
                          <Route path = "/games" component = {ListGameComponent}></Route>
                          <Route path = "/add/:id" component = {CreateGameComponent}></Route>
                          <Route path = "/edit/:id" component = {UpdateGameComponent}></Route>
                          <Route path = "/view/:id" component = {ViewGameComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
