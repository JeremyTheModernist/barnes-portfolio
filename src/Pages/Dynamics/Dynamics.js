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

export const Dynamics = () => {
  return(
    <ScrollToTop>
      <GridBox>

        <ProjectIntro projectName="dynamics"/>

        <XXLargeImage id={51}/>
        <XXLargeImage id={52}/>

        <XXLargeImage id={53}/>

        <EmptyColumn columns={1}/>
        <Quote colNum={5}>
            Our team began this design language effort by defining the overall vision. We applied a set of design parameters to the entire suite of Cloud + Enterprise Apps.
            From here, we focused in on the most essential components. This initial collection would lay the foundation for the beta release of the D365 Design Language.
            <br/><br/>
          <span className={"grid__quote--author"}>— Strategy Planning</span>
        </Quote>


        <XLargeImage id={55}/>
        <EmptyColumn columns={1}/>

        <XXLargeImage id={56}/>
        <ProjectBreakdown id={1} projectName="dynamics"/>
        <XXLargeImage id={57}/>

        <XLargeImage id={58}/>
        <EmptyColumn columns={1}/>

        <EmptyColumn columns={1}/>
        <XLargeImage id={59}/>

        <XXLargeImage id={62}/>

        <EmptyColumn columns={1}/>
        <XLargeImage id={60}/>

        <XXLargeImage id={61}/>

        <CTA/>

      </GridBox>
    </ScrollToTop>
  )
}
