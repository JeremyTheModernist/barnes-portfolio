import React from 'react';
import './App.scss';
import GridBox from './components/GridBox/GridBox.js';
import {AppState} from './AppState.js';
import Consumer from './AppState.js'
import XSmallImage from './components/Image-XS/XSmall-Image.js';
import SmallImage from './components/Image-Small/Small-Image.js';
import MediumImage from './components/Image-Medium/Medium-Image.js'
import LargeImage from './components/Image-Large/Large-Image.js'
import XLargeImage from './components/Image-XL/XL-Image.js'
import XXLargeImage from './components/Image-XXL/XXL-Image.js';

import Navigation from './components/Navigation/Navigation.js'
import Footer from './components/Footer/Footer.js'
import Quote from './components/Quote/Quote.js'
import Fullscreen from './components/Fullscreen/Fullscreen.js'
import About from './components/About/About.js'
import Splash from './components/Splash/Splash.js'
import ProjectOverview from './components/ProjectOverview/ProjectOverview.js'
import ProjectBreakdown from './components/ProjectBreakdown/ProjectBreakdown.js'

class App extends React.Component{

  render(){
    return (
      <AppState>
        <div className="App">
          <Fullscreen/>
          <About/>
          <Navigation/>
          <GridBox>
            <Splash/>

            <XXLargeImage id={1} noMargin="noBottom"/>
            <ProjectOverview id={'tres solutions'}/>

            <LargeImage id={2}/>
            <SmallImage id={1} empty={true}/>

            <MediumImage id={3}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={4}/>

            <XSmallImage id={1} empty={true}/>
            <Quote colNum={5}>
              When we came to Jeremy we knew we needed a redesign. We weren’t sure exactly which direction to take it, but Jeremy ran with it, and brought us a complete rebrand and identity to boot for every piece.
              <br/><br/>
              <span className={"grid__quote--author"}>— Aaron Holton, Tres Director</span>
            </Quote>

            <MediumImage id={5}/>
            <MediumImage id={3} empty={true}/>

            <XSmallImage id={1} empty={true}/>
            <XLargeImage id={6}/>

            <ProjectBreakdown id={'tres solutions 1'}/>

            <XSmallImage id={1} empty={true}/>
            <XLargeImage id={7}/>

            <MediumImage id={8}/>
            <MediumImage id={3} empty={true}/>

            <MediumImage id={9}/>
            <MediumImage id={10}/>

            <XSmallImage id={1} empty={true}/>
            <XLargeImage id={11}/>

            <MediumImage id={12}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={13}/>

            <XSmallImage id={1} empty={true}/>
            <LargeImage id={14}/>
            <XSmallImage id={1} empty={true}/>

            <XSmallImage id={1} empty={true}/>
            <LargeImage id={15}/>
            <XSmallImage id={1} empty={true}/>

            <ProjectBreakdown id={'tres solutions 2'}/>

            <SmallImage id={1} empty={true}/>
            <LargeImage id={16}/>


            <XSmallImage id={1} empty={true}/>
            <LargeImage id={17}/>
            <XSmallImage id={1} empty={true}/>

            <XSmallImage id={1} empty={true}/>
            <LargeImage id={18}/>
            <XSmallImage id={1} empty={true}/>

          </GridBox>
          <Footer/>
        </div>
      </AppState>

    );
  }

}

export default App;
