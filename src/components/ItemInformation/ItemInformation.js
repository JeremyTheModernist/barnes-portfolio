import React from 'react';
import Consumer from '../../AppState.js'

function ItemInformation(props){
  return(
    <Consumer>
      {
        (context) => {
          return context.information.map((item) => {
            return item.id == props.id ?
                <div className="item__information" key={item.id}>
                    <h2 className="item__title">{item.content.title}</h2>
                    {/* <h3 className="item__subtitle">{item.content.subtitle}</h3> */}
                    {item.content.title ? <h3 className="item__link">+ view now</h3> : null}
                </div>
                :
                null
          })
        }
      }
    </Consumer>
  )
}

export default ItemInformation;
