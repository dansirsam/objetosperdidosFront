import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Objeto from './component/Objeto';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/objeto" component={Objeto}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
