import React from "react";
import styled from "styled-components";
import { Theme } from "../core/Theme";
import { Tag } from "./Tag";

// inspired on https://bit.dev/awazeuk/library/header
const ProjectBox = styled.div`
  position: relative;
  max-width: 100%;
  border: none;
`;

const ProjectImage = styled.div`
  position: relative;
  max-width: 100%;
  background-color: ${Theme.menu_bg};
  height: 200px;
`;
const ProjectInfo = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  box-sizing: border-box;
`;
const ProjectName = styled.h3`
  position: relative;
  max-width: 100%;
  color: ${Theme.text};
`;

const ProjectTags = styled.div`
  max-width: 100%;
`;



export const Project = (props) => {
  const {id, image, title, link, description, years, skills } = props.listing;
  return (
    <ProjectBox className="card bg-dark text-white" key={id}>
      <ProjectImage />
      <ProjectInfo className="card-img-overlay">
        <ProjectName>{title}</ProjectName>
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
