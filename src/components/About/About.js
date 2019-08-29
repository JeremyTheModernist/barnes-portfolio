import React from 'react';
import Quote from '../Quote/Quote.js'
import Consumer from '../../AppState.js'

var emdash = "&#8212;"

class About extends React.Component{
  showAbout = (context) => {
    console.log('showing about!')
    return (
      <div className="about about--visible">
        <svg className="about__close" width="20" height="20" onClick={() => context.toggleAbout()}>
          <line x1="0" y1="0" x2="20" y2="20" stroke="white" stroke-width="2"/>
          <line x1="20" y1="0" x2="0" y2="20" stroke="white" stroke-width="2"/>
        </svg>
        <div className="aboutContent">
          <div className="aboutContent__intro">
            <h2 className="aboutContent__title">About me</h2>
            <div className="aboutContent__quote">
            There is a great need for clear language, both in content and in design, in the face of the uninterrupted tsunami of information that characterizes the present day.<br/><br/><span> &#8212; Ben Bos, 1969</span>
            </div>
            <div className="aboutContent__description">
              <p className="description__copy">
                This quote was recorded half a century ago, and yet it’s just as true as the day designer Ben Bos stated it. Today’s world overflows with data and information. At every turn, people are bombarded by messaging. I have worked with a range of companies. From fast-pace start ups and advertising agencies, to top tier corporations and design studios, IBM and now Microsoft. But regardless of medium, intent, or experience I have always found myself tasked with the essential challenge of creating clear, lucid experiences for customers. And, as of late, creating organizational clarity amidst an ever changing business environment. How do you distill complex processes like turning excel sheets into lively data visualizations or create coherency from a range of legacy Sales products? I have found that pivotal to creating usable, compelling experiences is an understanding that people are constantly trying to orient themselves with their environment. And simplicity is key to that goal. How might I sum myself up as a designer? I strive for organization from chaos and orientation amidst ambiguity.
              </p>
            </div>
          </div>
          <div className="aboutContent__img">
            <picture>
              {/* the source media code only works if I'm not using the Lazy Load Image  */}
              <source media="(min-width:1024px)" srcset="https://res.cloudinary.com/gestalt/image/upload/q_50/v1567038585/barnes-portfolio/01-Portrait-B_onckwf.jpg"/>
              <source media="(min-width:500px)" srcset="https://res.cloudinary.com/gestalt/image/upload/q_50/v1567038585/barnes-portfolio/01-Portrait-B_onckwf.jpg"/>
              <source media="(min-width:320px)" srcset="https://res.cloudinary.com/gestalt/image/upload/q_60,w_1000/v1567038585/barnes-portfolio/01-Portrait-B_onckwf.jpg"/>
              <img src="https://res.cloudinary.com/gestalt/image/upload/v1567038585/barnes-portfolio/01-Portrait-B_onckwf.jpg"></img>
              {/* Use Lazy Load image if you want to load resources in one at a time. */}
              {/* <LazyLoadImage effect="opacity" src={item.content.breakpointImgs.large}/> */}
            </picture>

          </div>
        </div>
      </div>
    )
  };
  hideAbout = () => {
    return (
      <div className="about about--hidden">
      </div>
    )
  }
  render(){
    return(
      <Consumer>
        {
          (context) => {
            return context.about ?
            this.showAbout(context)
            :
            this.hideAbout(context)
          }
        }
      </Consumer>
    )
  }
}

export default About;
