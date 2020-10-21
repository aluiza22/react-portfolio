import React from "react";
import styled from "styled-components";
import { ProjectListingsProvider, ProjectListingsConsumer} from '../core/ProjectListingsProvider';
import { Project } from "../components/Project";
import { ProjectFilter } from "../components/ProjectFilter";
import "../App.css";
import Pagination from "../components/Pagination";

const ProjectsList = styled.div`
  position: relative;
  max-width: 100%;
  border: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, .5fr));
  }
`;
const Empty = styled.span`
  color: var(--cinzin);
  font-size: 1.2rem;
`;
export const Projects = (props) => {
  const pageNumber = parseInt(props.pageNumber);
  const perPage = 10;
  let start = perPage*(pageNumber-1);
  let end = start+perPage;
  return (   
      <section id="ProjectsPage" className="page">
        <h2>Projects</h2>
        <ProjectListingsProvider projects={props.projects}>
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
                <Empty>{projectsListings.length === 0 ? 'no projects found' : ''}</Empty>
                <ProjectsList>                  
                  {projectsListings                    
                    .sort((a,b) => b.years[0] - a.years[0])
                    .slice(start,end)
                    .map(listing => (
                    <Project listing={listing} key={listing.id} />
                  ))}
                </ProjectsList>
                <Pagination 
                  pageSize={perPage}
                  totalCount={projectsListings.length}
                  currentPage={pageNumber}
                  base="/projects" 
                />
              </> 
            )}
          </ProjectListingsConsumer>
        </ProjectListingsProvider>
      </section>
  );
}

export default Projects;
