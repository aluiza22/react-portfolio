import React from "react";
import styled from "styled-components";
import { Theme } from "../core/Theme";

const ProjectFilterContainer = styled.div`
  background-color: ${Theme.main_color};
  margin: 30px 0px 15px;

`;

const FilterForm = styled.form`
  
`;


export const ProjectFilter = (props) => {
  return (
    <ProjectFilterContainer>
      <FilterForm className="form-row">
        <div className="col">
          <select className="form-select" id="skill">
            <option value="">Choose...</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" id="year">
            <option value="">Choose...</option>
          </select>
        </div>
    </FilterForm>
    </ProjectFilterContainer>
  );
};

export default ProjectFilter;
