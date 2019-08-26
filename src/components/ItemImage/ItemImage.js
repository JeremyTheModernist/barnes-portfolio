import React from 'react';
import Consumer from '../../AppState.js'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function ItemImage(props){
  return (
    <Consumer>
      {
        (context) => {
          return context.information.map((item) => {
              return props.id == item.id ?
                <div className="item__image" key={item.id}>
                  <LazyLoadComponent threshold={1200}>
                  <picture>
                    {/* the source media code only works if I'm not using the Lazy Load Image  */}
                    <source media="(min-width:1024px)" srcset={`${item.content.breakpointImgs.large}`}/>
                    <source media="(min-width:500px)" srcset={`${item.content.breakpointImgs.medium}`}/>
                    <source media="(min-width:320px)" srcset={`${item.content.breakpointImgs.small}`}/>
                    <img src={`${item.content.breakpointImgs.large}`}/>
                    {/* Use Lazy Load image if you want to load resources in one at a time. */}
                    {/* <LazyLoadImage effect="opacity" src={item.content.breakpointImgs.large}/> */}
                  </picture>
                </LazyLoadComponent>
                </div>
              :
              null
            })
        }
      }
    </Consumer>
  )
}

export default ItemImage;
