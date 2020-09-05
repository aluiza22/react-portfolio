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

const DefaultState = {
  skill: '',
  year: ''
}

export class ProjectFilter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  render() {
    const { skill, year } = this.state;
    const { skills, years, updateFilter } = this.props;
    
    let allSkills = [];
    skills.forEach(mergeSKills);
    function mergeSKills(item, index) {
      allSkills = allSkills.concat(item);
    }

    let allYears = [];
    years.forEach(mergeYears);
    function mergeYears(item, index) {
      allYears = allYears.concat(item);
    }

    return (
      <ProjectFilterContainer>
        <FilterForm className="form-row" onChange={() => setTimeout(() => updateFilter(this.state), 0)} noValidate>
          <div className="col">
            <select 
              className="custom-select" 
              id="skill" 
              value={skill}
              onChange={e => {
                  this.handleChange( 'skill', e.currentTarget.value );
              }}>
              <option value="" disabled>Filter by skill</option>
              {allSkills.filter((item, i, arr) => arr.indexOf(item) === i).map((sk, i) => (
                <option key={i} value={sk}>{sk}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <select 
              className="custom-select" 
              id="year" 
              value={year}
              onChange={e => {
                  this.handleChange( 'year', e.currentTarget.value );
              }}>
              <option value="" disabled>Filter by year</option>
              {allYears.filter((item, i, arr) => arr.indexOf(item) === i).map((yr, i) => (
                <option key={i} value={yr}>{yr}</option>
              ))}
            </select>
          </div>
      </FilterForm>
      </ProjectFilterContainer>
    );
  }
}

export default ProjectFilter;
