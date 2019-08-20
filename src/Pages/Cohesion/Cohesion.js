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

export const Cohesion = () => {
  return(
    <ScrollToTop>
      <GridBox>

        <ProjectIntro projectName="cohesion"/>

        <MediumImage id={23}/>
        <MediumImage id={29}/>

        <MediumImage id={24}/>
        <MediumImage id={25}/>

        <EmptyColumn columns={2}/>
        <LargeImage id={26}/>

        <LargeImage id={27}/>
        <EmptyColumn columns={2}/>

        <EmptyColumn columns={1}/>
        <Quote colNum={5}>
          We work with product teams at a foundational level to understand their product roadmaps, user needs, and usability assessments, to determine the common controls and patterns we need to create.
          <br/><br/>
          <span className={"grid__quote--author"}>— Cohesion Mission</span>
        </Quote>

        <XXLargeImage id={28}/>

        <Quote colNum={5}>
          One grid to unite our SAAS apps
        </Quote>

        <XXLargeImage id={30}/>

        <ProjectBreakdown id={1}/>

        <LargeImage id={31}/>
        <SmallImage id={32}/>

        <EmptyColumn columns={1}/>
        <Quote colNum={5}>
          This grid was built on 12 columns and a series of mathematical proportions. The two main goals were to accomodate a range of user content and provide a responsive system that worked across all screens.
        </Quote>

        <MediumImage id={33}/>
        <MediumImage id={34}/>

        <EmptyColumn columns={1}/>
        <LargeImage id={35}/>
        <EmptyColumn columns={1}/>

        <EmptyColumn columns={1}/>
        <LargeImage id={36}/>
        <EmptyColumn columns={1}/>

      </GridBox>
    </ScrollToTop>
  )
}
