import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ArrowLink = ({ className, link, text }) => {
  console.log(text, link)
  return(
  <a className={className} href={link}>
    {text}
    <FontAwesomeIcon icon={faChevronRight} size="xs" />
  </a>
)}

const StyledArrowLink = styled(ArrowLink)`
  display: block;
  font-family: "Galano Grotesque alt";
  text-decoration: none;
  color: #230138;

  @media screen and (min-width: 1000px){
    font-size: 30px;
    margin-bottom: 15px;
    svg{
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 1000px){
    font-size: 24px;
    svg{
      margin-left: 5px;
    }
  }
`

export default StyledArrowLink
