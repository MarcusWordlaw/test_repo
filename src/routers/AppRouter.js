import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../components/landingpage';
import AboutMe from '../components/aboutme';
import Blog from '../components/blog';
import Contact from '../components/contact';
import Projects from '../components/projects';
import Resume from '../components/resume';


const AppRouter = () => (
    <Switch>
        <Route exact path="/"  component = {LandingPage} />
        <Route path="/aboutme"  component = {AboutMe} />
        <Route path="/blog"  component = {Blog} />
        <Route path="/contact"  component = {Contact} />
        <Route path="/projects"  component = {Projects} />
        <Route path="/resume"  component = {Resume} />
    </Switch>
)
export default AppRouter;