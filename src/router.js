import React,{Component} from 'react';
import {Router, route, browserHistory, IndexRedirect} from 'react-router';

import App from './components/app'
import Home from './components/home'
import About from './components/about'
import Courses from './components/courses'
import Teachers from './components/teachers'
import NotFound from './components/notfound'
import Featured from './components/featured'

// import Html from './components/courses/html'
// import Css from './components/courses/css'
// import Javascript from './components/courses/javascript'

import CourseContainer from './components/courses/coursecontainer';
import CourseList from './data/courses';

const routes = () => (
			<Router history={browserHistory}>
				<route component={App}>
					<route path="/" component={Home}/>
					<route path="about" component={About}/>
					<route path="courses" component={Courses}>
						<IndexRedirect to="html" />
						<route path="html" component={CourseContainer} data={CourseList.HTML}/>
						<route path="css" component={CourseContainer} data={CourseList.CSS}/>
						<route path="javascript" component={CourseContainer} data={CourseList.JS}/>
					</route>
					<route path="teachers" component={Teachers}/>
					<route path="featured/:name/:topic" component={Featured}/>
					<route path="*" component={NotFound}/>
				</route>
			</Router>
		);

export default routes;