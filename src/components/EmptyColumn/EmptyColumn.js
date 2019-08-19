import React from 'react';

function EmptyColumn(props){
  var columns = props.columns;
  return(
    <div className={`grid__item grid__item--empty col-${columns}`}>
    </div>
  )
}


export default EmptyColumn;
