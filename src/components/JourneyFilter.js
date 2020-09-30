import React from "react";
import styled from "styled-components";

const DefaultState = {
    year: ''
}

export class JourneyFilter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  render() {
    const { year } = this.state;
    const { years, updateFilter } = this.props;

    let allYears = [];
    years.forEach(mergeYears);
    function mergeYears(item, index) {
      allYears = allYears.concat(item);
    }

    return (
      <nav id="timeline">
        <ul>
        {allYears.filter((item, i, arr) => arr.indexOf(item) === i).map((yr, i) => (
            <li  
                key={i} 
                onClick={e => {this.handleChange( 'year', e.currentTarget.dataset.year );}} 
                data-year={yr} 
                className={yr === year ? 'active':''}>    
            </li>
        ))}       
        </ul>
      </nav>
    );
  }
}

export default JourneyFilter;
