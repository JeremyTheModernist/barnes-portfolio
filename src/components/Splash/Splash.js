import React from 'react';
import Consumer from '../../AppState.js'

function Splash(props){
  return(
    <div className="col-6 splash">
      <ul className="splash__facts">
        <li>Multidisciplinary Design <br/> Front End Dev</li>
        <li>Currently working at<br/> Microsoft Cortana </li>
        <li>Selected Works from <br/> past to present </li>
      </ul>
      <h1 className={`splash__header`}>
        {/* {props.children} */}
        Portfolio Work
      </h1>
    </div>
  )
}

export default Splash;
