import React from "react";
import styled from "styled-components";
import { Theme } from "../core/Theme";
import { Project } from "./Project";

// inspired on https://github.com/jpreecedev/premium-property-finder/blob/master/src/context/PropertyListingsProvider.js

const DefaultState = {
  propertyListings: [],
  filter: {}
}

const ProjectList = styled.div`
  position: relative;
  max-width: 100%;
  border: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ProjectListing = (props) => {
  return (
    <ProjectList>
      <Project
            pname="Portfolio"
            ptags={["react", "mongodb", "bootstrap", "css", "html"]}
          />
      <Project
        pname="Blog"
        ptags={["wordpress", "php", "react", "gatsby"]}
      />
      <Project pname="100 days of code" ptags={["react", "css", "javascript"]} />
      <Project pname="Test" ptags={["this", "that"]} />
    </ProjectList>
  );
};

export default ProjectListing;
