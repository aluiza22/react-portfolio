import React from "react";
import styled from "styled-components";
import { Theme } from "../core/Theme";

const ProjectFilterContainer = styled.div`
    background-color: ${Theme.main_color};
    margin: 30px 0px 15px;

  `;

const FilterForm = styled.form`
  padding: 10px;
`;

export class ProjectFilter extends React.Component {
  state = {
      skillFilter: ""
    };

  render() {
    const { skillFilter } = this.state;
    return (
      <ProjectFilterContainer>
        <FilterForm className="form-row">
          <div className="col">
            <select 
              className="custom-select" 
              id="skill" 
              value={skillFilter}
              onChange={e => {
                  this.setState({ skillFilter: e.currentTarget.value });
                  alert(`The skill filtered is ${e.currentTarget.value}`);
              }}>
              <option value="" selected disabled>Filter by skill</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="JQuery">JQuery</option>
              <option value="PHP">PHP</option>
              <option value="Wordpress">Wordpress</option>
              <option value="Magento">Magento</option>
              <option value="React Native">React Native</option>
              <option value="React">React</option>
              <option value="MySQL">MySQL</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </div>
          <div className="col">
            <select className="custom-select" id="year">
              <option value="" selected disabled>Filter by year</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
      </FilterForm>
      </ProjectFilterContainer>
    );
  }
}

export default ProjectFilter;
