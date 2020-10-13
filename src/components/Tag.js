import React from "react";
import styled from "styled-components";

const TagLink = styled.a`
  background: var(--roxin);
  color: var(--roxo);
  display: inline-block;
  margin: 0px 5px 0 0;
  padding: 2px 6px;
  font-size: .5rem;
  line-height: 14px;
  cursor: pointer;
  &:hover {
    color: var(--roxo);
  }
`;

export const Tag = (props) => {
  return (    
    <TagLink>
      <span>{props.tag}</span>
    </TagLink>
  );
};

export default Tag;
