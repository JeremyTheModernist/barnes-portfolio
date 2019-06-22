import React from 'react';
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
                  Margie McInarnay
                </li>
                <li className="navigation__item" onClick={() => context.toggleAbout()}>
                  About
                </li>
                <li className="navigation__item">
                  Contact
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
