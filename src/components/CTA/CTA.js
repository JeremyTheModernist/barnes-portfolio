import React from 'react';
import { Router, Link } from "@reach/router";
import Consumer from '../../AppState.js'


export function CTA(props){
  return(

    props.allprojects
    ?
    <div class="footer__contact"></div>
    :
    <Consumer>
      {
        (context) => {
          return (
            <div class="footer__contact" onClick={() => context.hideInfo()}><Link to="/allprojects"><a>View all Projects</a></Link></div>
          )
        }
      }
    </Consumer>
  )
}
