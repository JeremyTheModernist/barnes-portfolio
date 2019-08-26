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

class Home extends React.Component{

  render(){
    return (
        <ScrollToTop>
        <div className="App">

          <GridBox>
            <Splash/>

            <XXLargeImage id={15} link="/microsoftcohesion" />

            <XXLargeImage id={6} link="/tressolutions"/>

            <LargeImage id={2} link="/microsoftfluent"/>
            <EmptyColumn columns={2}/>

            <MediumImage id={3} link="/microsoftdynamics"/>
            <EmptyColumn columns={1}/>
            <SmallImage id={4}/>

            <EmptyColumn columns={1}/>
            <Quote colNum={5}>
              When we came to Jeremy we knew we needed a redesign. We weren’t sure exactly which direction to take it, but Jeremy ran with it, and brought us a complete rebrand and identity to boot for every piece.
              <br/><br/>
              <span className={"grid__quote--author"}>— Aaron Holton, Tres Director</span>
            </Quote>



            <MediumImage id={5}/>
            <EmptyColumn columns={3}/>

            <EmptyColumn columns={1}/>
            <XLargeImage id={18}/>

            <ProjectBreakdown id={'tres solutions 1'}/>

            <EmptyColumn columns={1}/>
            <XLargeImage id={7}/>

            {/* <MediumImage id={9}/> */}
            <MediumImage id={8}/>
            <MediumImage id={10}/>
            {/* <MediumImage id={19}/> */}

            {/* <XSmallImage id={1} empty={true}/>
            <Quote colNum={5}>
              When I design, I strive to create with a system mindset, avoiding elements that would appear in isolation. My aim is to provide a collection of reusable parts that can be reconfigured with endless possibilities.
            </Quote> */}

            {/* <MediumImage id={8}/>
            <MediumImage id={1} empty={true}/> */}

            <EmptyColumn columns={1}/>
            <XLargeImage id={11}/>

            {/* <XXLargeImage id={1}/> */}

            <MediumImage id={12}/>
            <EmptyColumn columns={1}/>
            <SmallImage id={13}/>



            <EmptyColumn columns={1}/>
            <LargeImage id={14}/>
            <EmptyColumn columns={1}/>



            <XLargeImage id={20}/>
            <EmptyColumn columns={1}/>


            <EmptyColumn columns={1}/>
            <XLargeImage id={21}/>

            <ProjectBreakdown id={'tres solutions 2'}/>

            <EmptyColumn columns={1}/>
            <LargeImage id={16}/>
            <EmptyColumn columns={1}/>



            <EmptyColumn columns={1}/>
            <LargeImage id={17}/>
            <EmptyColumn columns={1}/>


            <XXLargeImage id={1}/>

            <Quote colNum={5}>
              Project 02: Microsoft Cohesion Team
            </Quote>

          </GridBox>
        </div>
      </ScrollToTop>

    );
  }

}

export default Home;
