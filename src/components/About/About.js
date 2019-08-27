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
                I grew up in the rural splendor of Bartlett's Ferry, Alabama. With the Chattahoochee River
                running right past my back door, my surroundings reeled me right in to an overwhelming
                appreciation of nature’s intricacies. So, I began drawing and painting at an early
                age trying to capture the detail in the beauty I saw all around me.
                I became more focused as an artist when my husband and
                I moved to Florida in 2010. With Florida’s tropical birds,
                flowers, and sunsets persuading me, I was once again wooed
                by nature to draw and to paint. We recently returned to
                Alabama and I am excited to be back in the surroundings
                which inspired me as an artist in my youth.
              </p>
            </div>
          </div>
          <div className="aboutContent__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Wim_Crouwel_1976.jpg"></img>
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
