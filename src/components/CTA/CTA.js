import React from 'react';
import { Router, Link } from "@reach/router";


export function CTA(props){
  return(
    props.home
    ?
    <div class="footer__contact"></div>
    :
    <div class="footer__contact"><Link to="/"><a>View all Projects</a></Link></div>
  )
}
