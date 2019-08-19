import React from 'react'

function ProjectIntro(){
  return(
      <div class="projectintro">
        <h1 class="projectintro__header">
          Project Name
        </h1>
      <ul class="projectintro__overview">
        <ul class="projectintro__disciplines">
          <li>Identity</li>
          <li>Responsive</li>
          <li>Branding</li>
          <li>Content Strategy</li>
        </ul>
        <li class="projectintro__challenge">
          Tres Solutions is a data analytics company supplying insightful metrics and feedback to vessel industries world wide. When Tres approached me, they we’re looking for a complete web redesign.
        </li>
        <li class="projectintro__solution">
          My first step with Tres was to understand the unique value propositions of their company, and perform a competitive analysis. From there, I built a series of moodboards and initial design directions oriented around my findings.
        </li>
      </ul>
      </div>
  )
}

export default ProjectIntro;
