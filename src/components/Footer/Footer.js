import React from 'react';
import { Router, Link } from "@reach/router"

function Footer(props){
  return(
    <div class="footer">
    <div class="footer__container">
      {/* <div class="footer__contact"><Link to="/"><a>View All Projects</a></Link></div> */}
      {/* <div class="footer__contact"><Link to="/"><a>Let's Connect and Share Ideas</a></Link></div> */}
      <ul class="footer__byline">
        <li class="footer__bio">
          Jeremy Barnes is a design manager and front end developer working at Microsoft.
        </li>
        <ul class="footer__social">
          <li>
            <a href="mailto:jeremyb1988@gmail.com" target="_top">Contact Me</a>
          </li>
          <li>
            {/* Facebook */}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/barnesjer/" target="_blank">LinkedIn</a>
          </li>
        </ul>

      </ul>
      <span class="footer__copyright">©2019 All rights reserved</span>
    </div>
    </div>
  )
}

export default Footer;
