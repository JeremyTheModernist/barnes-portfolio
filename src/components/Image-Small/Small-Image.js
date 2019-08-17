import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js';
import ItemImage from '../ItemImage/ItemImage.js'

function SmallImage(props){
  return(
    props.empty
    ?
    <div className="grid__item grid__item--empty col-2">
    </div>
    :
    <div className="grid__item col-2">
      <ItemImage id={props.id}/>
      {/* <ItemInformation id={props.id}/> */}
    </div>
  )
}

export default SmallImage;
