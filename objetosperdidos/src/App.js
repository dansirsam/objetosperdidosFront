import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path="/" component={Home}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
