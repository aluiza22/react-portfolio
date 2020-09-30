import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  background-color: var(--menu_badge_bg);
  display: inline-block;
  border-radius: 50px;
  margin: 3px 5px;
`;
const TagLink = styled.a`
  padding: 5px 10px;
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  color: var(--menu_badge_txt);
  margin: 0;
`;

export const Tag = (props) => {
  return (
    <TagContainer>
      <TagLink>
        <span>{props.tag}</span>
      </TagLink>
    </TagContainer>
  );
};

export default Tag;
