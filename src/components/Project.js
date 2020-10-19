import React from "react";
import styled from "styled-components";
import { Tag } from "./Tag";

const ProjectBox = styled.div`
  position: relative;
  max-width: 100%;
  border: none;
  background: none;
  background-image:
    linear-gradient(var(--verde) 2px, transparent 2px),
    linear-gradient(90deg, var(--verde) 2px, transparent 2px);
  background-size: 20px 20px, 20px 20px;
  background-position: -1px -2px, -1px -2px;
`;

const ProjectImage = styled.div`
  position: relative;
  max-width: 100%;
  background-size: cover;
  height: 200px;
  opacity: .9;
  border: 2px solid var(--roxin);
`;
const ProjectInfo = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  box-sizing: border-box;
  p {margin:0; font-size: .8rem; color: var(--cinza)}
  time, small {background: var(--roxin); color: #fff; position:absolute; top: 0; left:0; 
      font-size: .6rem; padding: .1rem 10px; font-weight: bold;} 
  small {left:unset; right:0; background: var(--verde);}
  small.mine {background: var(--cinzin);}
`;
const ProjectName = styled.h3`
  position: relative;
  max-width: 100%;
  font-size: 1.4rem;
  margin: 0;
  a {  color: var(--roxo); }
`;

const ProjectTags = styled.div`
  max-width: 100%;
`;



export const Project = (props) => {
  const {id, image, title, link, description, years, skills, experience, type } = props.listing;
  return (
    <ProjectBox className="card text-white" key={id} style={image ? {background: `none`} : {}}>
      <ProjectImage style={{ backgroundImage: `linear-gradient(rgba(var(--image_mask_start),.79), rgba(var(--image_mask_start),.99)), url('${image}')` }} />
      <ProjectInfo className="card-img-overlay"> 
        <time>{years.join(' - ')}</time>
        <small className={type === 'academic' || type === 'side-project' ? ' mine' : ''}>{type ? type.replace('-', ' ') : ''}{type && experience ? ' | ' : ''}{experience ? experience.replace('-', ' ') : ''}</small>
        <ProjectName><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></ProjectName>
        <p>{description}</p>       
        <ProjectTags>
          {skills.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </ProjectTags>
      </ProjectInfo>
    </ProjectBox>
  );
};

export default Project;
