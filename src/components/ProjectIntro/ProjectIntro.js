import React from 'react'
import Consumer from '../../AppState.js'

function ProjectIntro(props){
  var projectName = props.projectName;
  var mapDisciplines = (project) => {
    return project.disciplines.map(discipline => <li>{discipline}</li>)
  }
  return(
    <Consumer>
      {
        context => {
          var project = context.projects.filter(project => project.id === projectName )[0];
          return context.moreInfo
          ?
          (
            <div className="projectintro">
            <div className="projectintro__header">
              <h1 className="projectintro__title">
                {project.name}
              </h1>
              <div className="projectintro__toggle" onClick={() => context.toggleInfo()}>
                <div className="projectintro__toggle-hide">
                  - Hide Overview
                </div>
              </div>
            </div>
            <ul className="projectintro__overview">
              <ul className="projectintro__disciplines">
                {mapDisciplines(project)}
              </ul>
              <li className="projectintro__challenge">
                <h3 className="challenge__header"> Challenge </h3>
                  {project.challenge}
              </li>
              <li className="projectintro__solution">
                <h3 className="challenge__header"> Solution </h3>
                  {project.solution}
              </li>
            </ul>
            </div>
          )
          :
          <div className="projectintro">
            <div className="projectintro__header">
              <h1 className="projectintro__title">
                {project.name}
              </h1>
              <div className="projectintro__toggle" onClick={() => context.toggleInfo()}>
                <div className="projectintro__toggle-show">
                  + Show Overview
                </div>
              </div>
            </div>
          </div>
        }
      }

    </Consumer>
  )
}

export default ProjectIntro;
