import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js'
import ItemImage from '../ItemImage/ItemImage.js'

function XXLargeImage(props){
  return(
    <div className={`grid__item col-6 ${props.noMargin}`}>
      <ItemImage id={props.id}/>
      <ItemInformation id={props.id}/>
    </div>
  )
}

export default XXLargeImage;
