import React from "react";
import styled from "styled-components";
import { Theme } from "../core/Theme";

const TagContainer = styled.div`
  background-color: ${Theme.menu_badge_bg};
  display: inline-block;
  border-radius: 50px;
  margin: 3px 5px;
`;
const TagLink = styled.a`
  padding: 5px 10px;
  display: inline-block;
`;
const TagName = styled.h4`
  font-size: 12px;
  line-height: 14px;
  color: ${Theme.menu_badge_txt};
  margin: 0;
`;

export const Tag = (props) => {
  return (
    <TagContainer>
      <TagLink>
        <TagName>{props.tag}</TagName>
      </TagLink>
    </TagContainer>
  );
};

export default Tag;
