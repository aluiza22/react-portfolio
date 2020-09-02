import React from "react";
import styled from "styled-components";
import { ProjectListingsProvider, ProjectListingsConsumer} from '../core/ProjectListingsProvider';
import { Project } from "../components/Project";
import { ProjectFilter } from "../components/ProjectFilter";
import "../App.css";

const ProjectsList = styled.div`
  position: relative;
  max-width: 100%;
  border: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Projects = () => {
  return (   
      <section id="ProjectsPage">
        <h2>Projects</h2>
        <ProjectListingsProvider>
          <ProjectListingsConsumer>
            {({ projectsListings, allListings, updateFilter }) => (     
              <>      
                <ProjectFilter
                  updateFilter={updateFilter}
                  skills={allListings
                    .map(listing => listing.skills)}
                  years={allListings
                    .map(listing => listing.years)}
                />
                <ProjectsList>
                  {projectsListings.map(listing => (
                    <Project listing={listing} key={listing.id} />
                  ))}
                </ProjectsList>
              </> 
            )}
          </ProjectListingsConsumer>
        </ProjectListingsProvider>
      </section>
  );
}

export default Projects;
