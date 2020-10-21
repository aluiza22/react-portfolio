import React from "react";
import { Router, Link } from "@reach/router";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";
import { Blog } from "./pages/Blog";
//import { Quiz } from "./pages/Quiz";
import "./App.css";
import SkillsCloud from "./components/SkillsCloud";
import projectsData from "./core/projects.json";

export class App extends React.Component {
	constructor() {
        super();
        this.state = {
          posts: []
        }
    }
    componentDidMount() {
        let dataURL = "https://frontmap.anadev.com.br/wp-json/wp/v2/posts?_embed";
        fetch(dataURL)
          .then(res => res.json())
          .then(res => {
            this.setState({
              posts: res
            })
          })
	}
	render() {
		return (
			<>
				<main className="App">
				<aside>
					<section>
						<h2>Skills</h2>
						<ul id="mainSkills">
							<li>CSS 
								<progress data-years="7" max="100" value="90">
									<div className="progress-bar">
										<span style={{width:'90%'}}>90%</span>
									</div>
								</progress>
							</li>
							<li>HTML 
								<progress data-years="7" max="100" value="90">
									<div className="progress-bar">
										<span style={{width:'90%'}}>90%</span>
									</div>
								</progress>
							</li>
							<li>PHP 
								<progress data-years="7" max="100" value="80">
									<div className="progress-bar">
										<span style={{width:'80%'}}>80%</span>
									</div>
								</progress>
							</li>
							<li>JS 
								<progress data-years="6" max="100" value="70">
									<div className="progress-bar">
										<span style={{width:'70%'}}>70%</span>
									</div>
								</progress>
							</li>
							<li>Wordpress 
								<progress data-years="5" max="100" value="70">
									<div className="progress-bar">
										<span style={{width:'70%'}}>70%</span>
									</div>
								</progress>
							</li>
							<li>Magento 
								<progress data-years="4" max="100" value="60">
									<div className="progress-bar">
										<span style={{width:'60%'}}>60%</span>
									</div>
								</progress>
							</li>
							<li>React Native
								<progress data-years="2" max="100" value="20">
									<div className="progress-bar">
										<span style={{width:'20%'}}>20%</span>
									</div>
								</progress>
							</li>
							<li>React 
								<progress data-years="2" max="100" value="20">
									<div className="progress-bar">
										<span style={{width:'20%'}}>20%</span>
									</div>
								</progress>
							</li>
							</ul>
						
							<SkillsCloud projects={projectsData} />
					</section>
				</aside>
				<Router id="content">
					<AboutMe path="/" />
					<Projects path="projects/:pageNumber" projects={projectsData} />
					<Blog path="blog" posts={this.state.posts} />
					{/*<Quiz path="quiz" />*/}
				</Router>
				</main>
				<footer>
					<nav>
						<Link to="/">about me</Link>
						<Link to="projects/1">projects</Link>
						<Link to="blog">blog</Link>
						{/*<Link to="quiz">are we a good fit?</Link>*/}
					</nav>
				</footer>
			</>
		);
	}
}

export default App;
