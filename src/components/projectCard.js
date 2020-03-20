import React from "react"
import styled from "styled-components"
import ArrowLink from "./arrowLink"

const ProjectCard = ({ className, project }) => (
  <div className={className} key={project.system.id}>
    <a href={`projects/${project.system.codename}`}>
      <img src={project.elements.featured_image.value[0].url} alt={project.elements.featured_image.value[0].description}/>
      <h3>{project.system.name}</h3>
      <h4>{project.elements.time_period.value}</h4>
      <p>{project.elements.description.value}</p>
      <ArrowLink link={`projects/${project.system.codename}`} text="view project" />
    </a>
  </div>
)

const StyledProjectCard = styled(ProjectCard)`
  a{
    color: #230138;
    text-decoration: none;
  }
  h3{
    font-family: "Galano Grotesque alt";
  }
  h4{
    font-family: "Silka";
  }

  @media screen and (min-width: 800px){
    width: 85%;
    margin-top: 100px;
    h3{
      font-size: 36px;
    }
  }

  @media screen and (max-width: 800px){
    h3{
      font-size: 24px;
    }
    h4{
      font-size: 18px;
    }
  }
`

export default StyledProjectCard
