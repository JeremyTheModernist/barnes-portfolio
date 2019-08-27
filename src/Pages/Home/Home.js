import React from 'react';
import { Router, Link } from "@reach/router"

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.js'

import GridBox from '../../components/GridBox/GridBox.js';
import XSmallImage from '../../components/Image-XS/XSmall-Image.js';
import SmallImage from '../../components/Image-Small/Small-Image.js';
import MediumImage from '../../components/Image-Medium/Medium-Image.js'
import LargeImage from '../../components/Image-Large/Large-Image.js'
import XLargeImage from '../../components/Image-XL/XL-Image.js'
import XXLargeImage from '../../components/Image-XXL/XXL-Image.js';
import EmptyColumn from '../../components/EmptyColumn/EmptyColumn.js'

import Quote from '../../components/Quote/Quote.js'
import About from '../../components/About/About.js'
import Splash from '../../components/Splash/Splash.js'
import ProjectOverview from '../../components/ProjectOverview/ProjectOverview.js'
import ProjectBreakdown from '../../components/ProjectBreakdown/ProjectBreakdown.js'
import {CTA} from '../../components/CTA/CTA.js'

class Home extends React.Component{

  render(){
    return (
        <ScrollToTop>
        <div className="App">

          <GridBox>
            <Splash/>

            <XXLargeImage id={200} link="/tressolutions"/>

            <XXLargeImage id={202} link="/microsoftcohesion" />

            <XXLargeImage id={203} link="/microsoftfluent"/>

            <XXLargeImage id={204} link="/microsoftdynamics"/>

          </GridBox>
        </div>
      </ScrollToTop>

    );
  }

}

export default Home;
