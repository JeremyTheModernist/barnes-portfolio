import React from 'react';
import './App.scss';
import { Router, Link } from "@reach/router"


import Home from './Pages/Home/Home.js'
import {Tres} from './Pages/Tres/Tres.js';
import {Cohesion} from './Pages/Cohesion/Cohesion.js'
import {Fluent} from './Pages/Fluent/Fluent.js'
import {Dynamics} from './Pages/Dynamics/Dynamics.js'

import {AppState} from './AppState.js';


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
        <About/>
        <Navigation/>
          <Router>
            <Home path="/"/>
            <Tres path="tressolutions"/>
            <Cohesion path="microsoftcohesion"/>
            <Fluent path="microsoftfluent"/>
            <Dynamics path="microsoftdynamics"/>
          </Router>
        <Footer/>
      </>
      </AppState>

    );
  }

}

export default App;
