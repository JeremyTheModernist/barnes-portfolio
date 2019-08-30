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

export const GraphicEphemera = () => {
  return(
    <ScrollToTop>
      <GridBox>

        <div class="projectintro">
          <h1 class="projectintro__title">
            Graphic Ephemera:<br/>Personal Artifacts,<br/>2015 —
          </h1>
        </div>

        <MediumImage id={63}/>
        <MediumImage id={64}/>

        <ProjectBreakdown id={1} projectName="graphicephemera"/>

        <XXLargeImage id={65}/>
        <XXLargeImage id={66}/>

        <EmptyColumn columns={1}/>
        <Quote colNum={5}>
          Design can serve many purposes and objectives. Sometimes it must inform. Sometimes it must persuade. Sometimes it must identify. And yet, others it must captivate our attention, even before it states its message.
          <br/><br/>
          <span className={"grid__quote--author"}>— Personal Thoughts</span>
        </Quote>

        <MediumImage id={67}/>
        <MediumImage id={68}/>

        <EmptyColumn columns={1}/>
        <LargeImage id={69}/>
        <EmptyColumn columns={1}/>

        <MediumImage id={70}/>
        <MediumImage id={71}/>

        <MediumImage id={72}/>
        <MediumImage id={73}/>

        <EmptyColumn columns={1}/>
        <MediumImage id={74}/>
        <EmptyColumn columns={2}/>

        <EmptyColumn columns={1}/>
        <MediumImage id={75}/>
        <EmptyColumn columns={2}/>

        <MediumImage id={76}/>
        <MediumImage id={77}/>



        <CTA/>

      </GridBox>
    </ScrollToTop>
  )
}
