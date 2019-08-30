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
            <div class="projectintro">
            <div class="projectintro__header">
              <h1 class="projectintro__title">
                {project.name}
              </h1>
              <h4 class="projectintro__toggle" onClick={() => context.toggleInfo()}>
                - Hide Overview
              </h4>
            </div>
            <ul class="projectintro__overview">
              <ul class="projectintro__disciplines">
                {mapDisciplines(project)}
              </ul>
              <li class="projectintro__challenge">
                <h3 class="challenge__header"> Challenge </h3>
                  {project.challenge}
              </li>
              <li class="projectintro__solution">
                <h3 class="challenge__header"> Solution </h3>
                  {project.solution}
              </li>
            </ul>
            </div>
          )
          :
          <div class="projectintro">
            <div class="projectintro__header">
              <h1 class="projectintro__title">
                {project.name}
              </h1>
              <h4 class="projectintro__toggle" onClick={() => context.toggleInfo()}>
                + Show Overview
              </h4>
            </div>
          </div>
        }
      }

    </Consumer>
  )
}

export default ProjectIntro;
