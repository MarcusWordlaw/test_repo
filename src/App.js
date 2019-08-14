import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Marcus Wordlaw Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </Navigation> 
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Link 1.1</Link>
                <Link to="/">Link 2.1</Link>
                <Link to="/">Link 3.1</Link>
                <Link to="/">Link 4.1</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
export default App;
