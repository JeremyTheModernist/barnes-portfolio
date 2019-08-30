import React from 'react';
import { Router, Link } from "@reach/router";


export function CTA(props){
  return(
    props.allprojects
    ?
    <div class="footer__contact"></div>
    :
    <div class="footer__contact"><Link to="/allprojects"><a>View all Projects</a></Link></div>
  )
}
