import React from "react";
import { JourneyListingsProvider, JourneyListingsConsumer } from "../core/JourneyListingsProvider";
import JourneyFilter from "./JourneyFilter";

/*function timelineWalk() {
const yearNodes = document.querySelectorAll('nav li');
const timelineBar = document.getElementById('timeline_bar');
yearNodes.forEach(function(year) {
    year.addEventListener('click', function(e) {
    document.querySelectorAll('li.active').forEach(function(item) {
        item.classList.remove('active');
    });
    document.querySelectorAll('li[data-year="'+e.target.dataset.year+'"]')
        .forEach(function(item) {          
        item.classList.add('active');        
    });
    timelineBar.style.width = (14.28 * ( e.target.dataset.year - 2013 )) + "%";
    });
});
}*/

export const Timeline = () => {
  return (
    <>
        <JourneyListingsProvider>
          <JourneyListingsConsumer>
            {({ journeyListings, allListings, updateFilter }) => (     
              <>      
                <JourneyFilter
                  updateFilter={updateFilter}
                  years={allListings
                    .map(listing => listing.years)}
                />
                <ul id="moments">
                  {journeyListings.map(listing => (
                    <li key={listing.id} data-year="{listing.years[0]}" className="{listing.type}">
                      <time>{listing.years[0]} - {listing.years[1]}</time>
                      <h4>{listing.title}</h4>
                      <h5>{listing.institution}</h5>
                      <h6>{listing.place}</h6>
                    </li>
                  ))}
                </ul>
              </> 
            )}
          </JourneyListingsConsumer>
        </JourneyListingsProvider>
        {/*<nav id="timeline">
            <ul>
            <li onClick={timelineWalk} data-year="2013" className="active"></li>
            <li onClick={timelineWalk} data-year="2014"></li>
            <li onClick={timelineWalk} data-year="2015"></li>
            <li onClick={timelineWalk} data-year="2016"></li>
            <li onClick={timelineWalk} data-year="2017"></li>
            <li onClick={timelineWalk} data-year="2018"></li>
            <li onClick={timelineWalk} data-year="2019"></li>
            <li onClick={timelineWalk} data-year="2020"></li>
            </ul>
            <span id="timeline_bar"></span>
        </nav>
        <ul id="moments">
            <li data-year="2013" className="academic active">
            <time>2013 - 2018</time>
            <h4>Technologist with honors, Internet Systems</h4>
            <h5>UNIVALI</h5>
            <h6>Itajai, Brazil</h6>
            </li>
            <li data-year="2015" className="professional">
            <time>2015 - 2016</time>
                <h4>Brazilian Scientific Mobility Program Student – USA, Information Systems</h4>
                <h5>NJIT</h5>
                <h6>Newark, United States</h6>
            </li>
            <li data-year="2013" className="professional active">
            <time>2013 - 2014</time>
                <h4>Frontend developer</h4>
                <h5>IWX Web</h5>
                <h6>Itajai, Brazil</h6>
            </li>
            <li data-year="2014" className="academic">
            <time>2014 - 2015</time>
                <h4>Fullstack developer</h4>
                <h5>BPM Comunicacao</h5>
                <h6>Itajaí, Brazil</h6>
            </li>
            <li data-year="2015" className="professional">
            <time>2015 - 2018</time>
                <h4>Fullstack developer</h4>
                <h5>BPM Comunicacao</h5>
                <h6>Itajaí, Brazil</h6>
            </li>
            <li data-year="2016" className="academic">
            <time>2016 - 2018</time>
                <h4>Technologist with honors, Internet Systems</h4>
                <h5>UNIVALI</h5>
                <h6>Itajai, Brazil</h6>
            </li>
            <li data-year="2017" className="professional">
            <time>2017 - 2018</time>
                <h4>Technologist with honors, Internet Systems</h4>
                <h5>UNIVALI</h5>
                <h6>Itajai, Brazil</h6>
            </li>
            <li data-year="2018" className="professional">
            <time>2018 - 2020</time>
                <h4>Brazilian Scientific Mobility Program Student – USA, Information Systems</h4>
                <h5>NJIT</h5>
                <h6>Newark, United States</h6>
            </li>
            <li data-year="2019" className="academic">
            <time>2019 - 2020</time>
                <h4>Fullstack developer</h4>
                <h5>BPM Comunicacao</h5>
                <h6>Itajaí, Brazil</h6>
            </li>
            <li data-year="2020" className="academic">
            <time>2020 - present</time>
                <h4>Fullstack developer</h4>
                <h5>BPM Comunicacao</h5>
                <h6>Itajaí, Brazil</h6>
            </li>
        </ul>*/}
    </>
  );
};

export default Timeline;