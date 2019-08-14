import React from 'react';
import Consumer from '../../AppState.js';

export default function ProjectOverview(props){
  return(
    <Consumer>
    {
        (context) => {
            return context.overviews.map((overview) => {
            if(props.id === overview.id){
              return(
                <>
                <div className="ProjectOverview">
                  <div className="ProjectOverview__Column">
                    {overview.columnOneClient}
                    <br/>
                    {overview.columnOneWork}
                  </div>
                  <div className="ProjectOverview__Column">
                    {overview.columnTwo}
                  </div>
                </div>
                </>
              )
            }
            })
         }
      }

  </Consumer>
  )
}


{/* {
  (context) => {
    if(props.id === context.overviews.id){
      return context.overviews.map((overview) => {
        return(
          <div className="col-1 ProjectOverview">
            hey
          </div>
        )
      })
    }
  }
} */}
