import React from "react";
import data from "./experience.json";

const DefaultState = {
  journeyListings: [],
  filter: {}
}

const JourneyListingsContext = React.createContext(DefaultState);

export const JourneyListingsConsumer = JourneyListingsContext.Consumer;

export class JourneyListingsProvider extends React.Component {
  static applyFilter(listings, filter) {
    const { year } = filter;
    let result = listings;
    if (year) {
      result = result
        .filter(item => item.years[0] <= year && year <= item.years[1])
        .sort((a,b) => b.years[0] - a.years[0]);
    }
    return result;
  }

  state = DefaultState;

  componentDidMount() {   
    //const firstYear = data.map(listing => listing.years).sort()[0][0];
    //this.setState({ journeyListings: data, filter: {year: firstYear} });
    this.setState({ journeyListings: data, filter: {year: "↝"} });
    
  }

  getListingByProjectId = projectsId => {
    const { journeyListings } = this.state;
    return journeyListings.find(listing => listing.id === Number(projectsId));
  }

  updateFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { children } = this.props;
    const { journeyListings, filter } = this.state;

    const filteredListings = JourneyListingsProvider.applyFilter(
      journeyListings,
      filter
    );

    


    return (
      <JourneyListingsContext.Provider
        value={{
          allListings: journeyListings,
          journeyListings: filteredListings,
          updateFilter: this.updateFilter,
          getListingByProjectId: this.getListingByProjectId
        }}
      >
        {children}
      </JourneyListingsContext.Provider>
    )
  }
}