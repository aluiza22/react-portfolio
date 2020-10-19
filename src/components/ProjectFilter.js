import React from "react";
import styled from "styled-components";
import {navigate} from "@reach/router";

const ProjectFilterContainer = styled.div`
    margin: 30px 0px 10px;
  `;

const FilterForm = styled.form`  
  select {
    border-radius: 0;
    background-color: transparent;
    color: var(--cinza);
    margin-bottom: 5px;
    border: 2px solid var(--roxin);
    text-shadow: 1px 1px 0px var(--roxin);
    font-size: .9rem;
    padding: 0.25rem 1.75rem 0.25rem 0.75rem;
}
  @media (min-width: 800px) {
    #skill {padding-right:7.5px;}
    #year {padding-left:7.5px;}
  }
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
    });
    navigate("/projects/1");
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
        <FilterForm className="row no-gutters" onChange={() => setTimeout(() => updateFilter(this.state), 0)} noValidate>
          <div id="skill" className="col-md-6">
            <select 
              className="custom-select"               
              value={skill}
              onChange={e => {
                  this.handleChange( 'skill', e.currentTarget.value );
              }}>
              <option value="" disabled>Filter by skill</option>
              {allSkills
                .filter((item, i, arr) => arr.indexOf(item) === i)
                .map((sk, i) => (
                <option key={i} value={sk}>{sk}</option>
              ))}
            </select>
          </div>
          <div id="year" className="col-md-6">
            <select 
              className="custom-select" 
              value={year}
              onChange={e => {
                  this.handleChange( 'year', e.currentTarget.value );
              }}>
              <option value="" disabled>Filter by year</option>
              {allYears
                .filter((item, i, arr) => arr.indexOf(item) === i)
                .sort((a,b) => a - b)
                .map((yr, i) => (
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
