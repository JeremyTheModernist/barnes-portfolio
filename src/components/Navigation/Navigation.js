import React from 'react';
import { Router, Link } from "@reach/router"

import Consumer from '../../AppState.js'

function Navigation(){
  return(
    <Consumer>
      {
        (context) => {
          return (
            <div className="navigation">
              <ul className="navigation__layout">
                <li className="navigation__item navigation__item--title">
                  <Link to="/">Jeremy Barnes</Link>
                </li>
                <li className="navigation__item" onClick={() => context.toggleAbout()}>
                  About
                </li>
                <li className="navigation__item">
                  <a href="mailto:m_mcinarnay@bellsouth.net" target="_top">Contact</a>
                </li>
              </ul>
            </div>
          )
        }
      }
    </Consumer>
  )
}

export default Navigation;
