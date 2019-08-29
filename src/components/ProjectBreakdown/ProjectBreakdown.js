import React from 'react';
import Consumer from '../../AppState.js';

export default function ProjectBreakdown(props){
  // var projectName = 'tres solutions';
  return(
    <Consumer>
    {
        (context) => {
            var project = context.projects.filter(project => project.id === props.projectName )[0];
            return project.breakdowns.map((breakdown) => {
            if(props.id === breakdown.id){
              return(
                <>
                <div className="ProjectBreakdown">
                  <div className="ProjectBreakdown__Column">
                    {breakdown.columnOne}
                  </div>
                  <div className="ProjectBreakdown__Column">
                    {breakdown.columnTwo}
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
