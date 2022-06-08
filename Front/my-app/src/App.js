import './App.css';

import {Home} from './Home';
import {Client} from './Client';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react'


function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <h3 className="m-3 d-flex justify-content-center">
      Client Management
    </h3>
    <Navigation/>
    <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/client' component={Client}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
