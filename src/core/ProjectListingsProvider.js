import React from "react";
import data from "./data.json";

const DefaultState = {
  projectsListings: [],
  filter: {}
}

const ProjectListingsContext = React.createContext(DefaultState);

export const ProjectListingsConsumer = ProjectListingsContext.Consumer;

export class ProjectListingsProvider extends React.Component {
  static applyFilter(listings, filter) {
    const { skill, year } = filter;
    let result = listings;
    if (skill) {
      result = result.filter(item => item.skills.map().contains(skill));
    }
    if (year) {
      result = result.filter(item => item.year.map().contains(year));
    }
    return result;
  }

  state = DefaultState;

  componentDidMount() {
    /*fetch('../../public/server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ projectsListings: res })
      });*/
    this.setState({ projectsListings: data });
    //console.log(this.state.projectsListings);
  }

  getListingByProjectId = projectsId => {
    const { projectsListings } = this.state;
    return projectsListings.find(listing => listing.id === Number(projectsId));
  }

  updateFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { children } = this.props;
    const { projectsListings, filter } = this.state;

    const filteredListings = ProjectListingsProvider.applyFilter(
      projectsListings,
      filter
    );

    


    return (
      <ProjectListingsContext.Provider
        value={{
          allListings: projectsListings,
          projectsListings: filteredListings,
          updateFilter: this.updateFilter,
          getListingByProjectId: this.getListingByProjectId
        }}
      >
        {children}
      </ProjectListingsContext.Provider>
    )
  }
}