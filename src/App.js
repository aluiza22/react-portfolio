import React from "react";
import { Router, Link } from "@reach/router";
import { Projects } from "./pages/Projects";
import { Curriculum } from "./pages/Curriculum";
import { Quiz } from "./pages/Quiz";
import "./App.css";

function App() {
  return (
  	<>
	    <main className="App">
	      <aside>
		    <section>
				<h2>Skills</h2>
				<p>CSS 
					<progress max="100" value="90">
						<div class="progress-bar">
			                <span style={{width:'90%'}}>90%</span>
			            </div>
			        </progress>
				</p>
				<p>HTML 
					<progress max="100" value="90">
						<div class="progress-bar">
			                <span style={{width:'90%'}}>90%</span>
			            </div>
			        </progress>
				</p>
				<p>JS 
					<progress max="100" value="70">
						<div class="progress-bar">
			                <span style={{width:'70%'}}>70%</span>
			            </div>
			        </progress>
				</p>
				<p>React 
					<progress max="100" value="50">
						<div class="progress-bar">
			                <span style={{width:'50%'}}>50%</span>
			            </div>
			        </progress>
				</p>
				<p>PHP 
					<progress max="100" value="70">
						<div class="progress-bar">
			                <span style={{width:'70%'}}>70%</span>
			            </div>
			        </progress>
				</p>
				<p>Wordpress 
					<progress max="100" value="80">
						<div class="progress-bar">
			                <span style={{width:'80%'}}>80%</span>
			            </div>
			        </progress>
				</p>
				<p>Magento 
					<progress max="100" value="80">
						<div class="progress-bar">
			                <span style={{width:'80%'}}>80%</span>
			            </div>
			        </progress>
				</p>
				<p>Ajax | APIs REST | Bootstrap | CakePHP | Cordova | Git | JQuery | JSON | Linux | MongoDB | MVC | MySQL | npm | Phonegap | Photoshop | PostgreSQL | React Native | Ruby on Rails | SASS | SCRUM | SEO | SVN | Trello | Web services | Windows | WooCommerce | Vue.js | XML</p>
			</section>
	      </aside>
	      <Router>
	        <Projects path="/" />
	        <Curriculum path="cv" />
	        <Quiz path="quiz" />
	      </Router>
	    </main>
	    <footer>
			<nav>
				<Link to="/">projects</Link>
				<Link to="cv">curriculum</Link>
				<Link to="quiz">are we a good fit?</Link>
			</nav>
		</footer>
	</>
  );
}

export default App;
