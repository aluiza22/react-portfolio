import React from 'react';
import styled from 'styled-components';

const SkillsCloudStyle = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  justify-items: center;
  border-right:0;
  margin: 2rem 0;
  text-align: center;
  font-size: .8rem;
  li {
      margin: 3px;
      line-height: 1;
      display: inline-block;
      flex: auto;
      color: var(--roxo);
      text-shadow: 1px 1px 0px var(--roxin);
  }
`;

export default function SkillsCloud({projects}) {
    
  const skills = projects.map(listing => listing.skills);
  let allSkills = [];
  skills.forEach(mergeSKills);
  function mergeSKills(set, index) {
      set.forEach(populateSkills);
  }
  function populateSkills(item, index) {
    allSkills[item] = allSkills[item] ? allSkills[item]+1 : 1;
  }
  console.log(typeof allSkills);

  return (
    <SkillsCloudStyle data-test={allSkills} className="teste">
      {Object.keys(allSkills).map((keyName, i) => (
        <li key={i} style={{fontSize: `${1 + 0.1 * (allSkills[keyName]/10)}rem`, opacity: `${0.5 + 0.1 * (allSkills[keyName]/10)}`}}>
            {keyName}
        </li>
    ))}
    </SkillsCloudStyle>
  );
}