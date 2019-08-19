import React from 'react';
import './App.scss';
import { Router, Link } from "@reach/router"
import {Tres} from './Pages/Tres/Tres.js';

import {AppState} from './AppState.js';

import Home from './Pages/Home/Home.js'
import Navigation from './components/Navigation/Navigation.js'
import Footer from './components/Footer/Footer.js'
import About from './components/About/About.js'

class Routing extends React.Component{
  render(){
    return(
      <Router>
          <App path="/"/>
          <Tres path="tres"/>
      </Router>
    )
  }
}

class App extends React.Component{

  render(){
    return (
      <AppState>
        <>
        <Navigation/>
          <Router>
            <Home path="/"/>
            <Tres path="tressolutions"/>
          </Router>
        <Footer/>
      </>
      </AppState>

    );
  }

}

export default App;
