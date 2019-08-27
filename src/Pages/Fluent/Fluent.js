import React from 'react';
import { Router, Link } from "@reach/router"

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.js'

import GridBox from '../../components/GridBox/GridBox.js';
import XSmallImage from '../../components/Image-XS/XSmall-Image.js';
import SmallImage from '../../components/Image-Small/Small-Image.js';
import MediumImage from '../../components/Image-Medium/Medium-Image.js';
import LargeImage from '../../components/Image-Large/Large-Image.js';
import XLargeImage from '../../components/Image-XL/XL-Image.js';
import XXLargeImage from '../../components/Image-XXL/XXL-Image.js';
import EmptyColumn from '../../components/EmptyColumn/EmptyColumn.js'
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro.js';

import Quote from '../../components/Quote/Quote.js'
import About from '../../components/About/About.js'
import Splash from '../../components/Splash/Splash.js'
import ProjectOverview from '../../components/ProjectOverview/ProjectOverview.js'
import ProjectBreakdown from '../../components/ProjectBreakdown/ProjectBreakdown.js'
import {CTA} from '../../components/CTA/CTA.js'

export const Fluent = () => {
  return(
    <ScrollToTop>
      <GridBox>

        <ProjectIntro projectName="fluent"/>

        <MediumImage id={39}/>
        <MediumImage id={40}/>



        {/* <XXLargeImage id={42}/> */}

        <XXLargeImage id={41}/>
        <XXLargeImage id={50}/>
        <XXLargeImage id={43}/>

        <EmptyColumn columns={1}/>
        <Quote colNum={5}>
          A significant part of the early Fluent efforts was to push the threshold of design possibilities. We specefically broke convention to drive the vision forward. While experimental in nature, these designs would lay a foundation for more concrete thinking within Fluent Design.
          <br/><br/>
          <span className={"grid__quote--author"}>— Fluent Design</span>
        </Quote>

        <XXLargeImage id={44}/>

        <EmptyColumn columns={1}/>
        <SmallImage id={45}/>
        <SmallImage id={46}/>
        <EmptyColumn columns={1}/>

        <EmptyColumn columns={1}/>
        <SmallImage id={48}/>
        <SmallImage id={49}/>
        <EmptyColumn columns={1}/>

        <XXLargeImage id={47}/>

        <CTA/>

      </GridBox>
    </ScrollToTop>
  )
}
