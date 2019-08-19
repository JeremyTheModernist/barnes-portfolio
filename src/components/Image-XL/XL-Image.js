import React from 'react';
import ItemInformation from '../ItemInformation/ItemInformation.js'
import ItemImage from '../ItemImage/ItemImage.js'
import { Router, Link } from "@reach/router"

function XLargeImage(props){
  function linked(){
    return(
      <div className={`grid__item col-5`}>
        <Link to={`${props.link}`}>
          <ItemImage id={props.id}/>
          {/* <ItemInformation id={props.id}/> */}
        </Link>
      </div>
    )
  }
  function unlinked(){
    return(
      <div className="grid__item col-5">
        <ItemImage id={props.id}/>
        {/* <ItemInformation id={props.id}/> */}
      </div>
    )
  }
  return(
    props.link ? linked() : unlinked()
  )
}


export default XLargeImage;
