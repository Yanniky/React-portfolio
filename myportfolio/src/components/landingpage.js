import React, {Component} from 'react';
import {Grid, Cell, } from 'react-mdl';
import Yann from './Yann.jpg'



class Landing extends Component{
    render(){
        return(
           
              <div style={{width: '100%', margin: 'auto',}}>            
              <Grid className="landing-grid">
                <Cell col={12}>
                <img
                    src ={Yann}
                    alt="avatar"
                    className="Yann" 
                />
                <div className="banner-text">
                    <h1>Full Stack Graduate Web Developer</h1>
                    <hr />
                    
                    <p >HTML/Css | Boostrap | React Native |JavaScript | C# | SQL | Firebase | Android Studio</p>
                    <div className="social-links">
                        {/*Linked In*/}
                        <a href="https://www.linkedin.com/in/yann-mountou-b67a15129/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                          {/*Github */}
                          <a href="https://github.com/Yanniky" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github" aria-hidden="true"/>
                        </a>
                           {/*free code camp*/}
                        <a href="htpp://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp" aria-hidden="true"/>
                        </a>
                        {/*youtube  */}
                        <a href="https://www.linkedin.com/in/yann-mountou-b67a15129/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                </Cell>
              </Grid>
          </div>
         
         
        )
    }
}export default Landing;