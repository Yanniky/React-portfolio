import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel,  } from 'react-responsive-carousel';
// import Skills from './skills';
// import Yann from './Yann.jpg';
// import About1 from './about1.jpg';
// import About2 from './about2.jpg';
// import About3 from './about3.jpg';
// import About6 from './about6.jpg';
// import About7 from './about7.jpg';
// import About8 from './about8.jpg';
// import About12 from './about12.jpg';
// import About13 from './about13.jpg';
// import Slide1 from './slide1.PNG';
// import Slide2 from './slide2.PNG';
// import Slide3 from './slide3.PNG';
// import Slide4 from './slide4.PNG';
// import Slide5 from './slide5.PNG';
// import Slide6 from './slide6.PNG';
// import Slide7 from './slide7.PNG';
// import Slide8 from './slide8.PNG';
// import Slide9 from './slide9.PNG';
// import Slide10 from './slide10.PNG';
import Yann from './Yann.jpg';

class About extends Component{
    render(){
        return(
          <div>
            <Grid style={{backGround: 'C0C0C0'}}>
               <Cell  col={12} style={{textAlign: 'center'}}>
               <img
                    src ={Yann}
                    alt="avatar"
                    className="Yann" />        
                     <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                <h1 style={{textAlign: '', }}>Yann Mountou</h1>
                
                <h6 style={{textAlign: '', fontFamily: 'poppin'}}>Graduate Student from UCOL Palmerston North</h6>
                
                <Button variant="primary" style={{background: 'blue', margin: '4px',  fontFamily: 'poppin', color:'white', }} href="https://github.com/Yanniky">
                 View Projects </Button>
                <Button variant="primary" style={{background: 'blue', margin: 'auto', fontFamily: 'poppin', color:'white', }} href="https://firebasestorage.googleapis.com/v0/b/finalassessment-a43a2.appspot.com/o/Yann%20Mountou%20Resume.doc?alt=media&token=512123b5-78b4-41db-a76f-d2a1d4540493">Download Resume</Button>
              </Cell>
           </Grid>
      
          </div>
        )
    }
}export default About;