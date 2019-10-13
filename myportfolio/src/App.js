import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer,Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color"title={<Link style={{textDecoration: 'none', color: 'white'}} to="/" >
            MY PORTFOLIO
        </Link>} scroll>
            <Navigation>
                <Link to="/resume">RESUME</Link>
                <Link to="/aboutme">ABOUT ME</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/signin">SIGN IN</Link>
                <Link to="/signup">SIGN UP</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'blue'}} to="/" >
            MY PORTFOLIO
        </Link>} >
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/account">Account</Link>
                <Link to="/pw-forget">pw-forget</Link>
                <Link to="/firebase">Firebase</Link>
            </Navigation>          
        </Drawer>
        <Content>
            <div className="page-content"  />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
