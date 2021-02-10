import React from "react";
import styled from "styled-components";

const JourneyFilterStyles = styled.nav`
  position:relative; 
  z-index:0; 
  margin: 40px 10% 0;
  ul {
    display:flex;
    justify-content: space-between;
    align-content:center;
    padding-bottom: 0px;
  }
  li {
    width: 12px;
    height: 12px;
    background:var(--roxin);
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    
    &:before {
      width: 100px;
      text-align: center;
      position:absolute;
      content: attr(data-year);
      color:var(--roxo);
      left:-45px;
      top: -25px;
    }
    &:nth-child(even):before {top: 15px;}
    &.active {font-weight:bold; background:var(--roxo);}
  }
  #timeline_bar, &:after  {
    position: absolute;
    height:3px;
    width: 0%;
    top: 4px;
    left: 0;
    background:var(--roxo);
    z-index:-1;
    transition: width .5s ease;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    background: #dedede;
    z-index: -2;
  }
  
  @media (min-width: 480px) {
    li:nth-child(even):before {top: -25px;}
  }
  
`;

const DefaultState = {
    year: '↝'
}

export class JourneyFilter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    });
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
      <JourneyFilterStyles>
        <ul>
        {allYears.filter((item, i, arr) => arr.indexOf(item) === i).sort().map((yr, i) => (
            <li  
                key={i} 
                onClick={e => {this.handleChange( 'year', e.currentTarget.dataset.year ); setTimeout(() => updateFilter(this.state), 0);}} 
                data-year={yr} 
                className={yr === year || (year === '↝' && i === allYears.length-1) ? 'active':''}>    
            </li>
        ))}       
        </ul>
      </JourneyFilterStyles>
    );
  }
}

export default JourneyFilter;
