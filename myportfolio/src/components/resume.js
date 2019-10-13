import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import Yann from './Yann.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <Grid>
                <Cell className="resume-left-col" col={4} style={{backgroundColor: '#0C2D48', color: 'white', padding: '15px', textAlign: 'center'}}>
                    <div style={{textAlign: 'center'}}>
                        <img src={Yann}
                         alt="avatar"
                         className="Yann-resume"/>
                        
                    </div>
                    <h2 style ={{PaddingTop: '2em'}}>Yann Mountou</h2>
                    <h4 style ={{color: 'grey'}}>programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <p>A rising IT Specialist noted for 
                        Hands-on practicum, experience in network,
                        hardware configuration and support.
                        Experienced Technology enthusiast with
                        developed skills in creative problem 
                        solving to identify new opportunities, expand customer base, deepen existing relationships, and satisfy corporate strategic objectives.
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <h5>Address</h5>
                    <p> Palmerston North Manawatu N.Z</p>
                    <h5>Phone</h5>
                    <p>02040392122</p>
                    <h5>Email</h5>
                    <p>ymountou@yahoo.fr</p>
                    <h5>Web</h5>
                    <p>23-Yann-Mountou.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <h4 style ={{color: 'grey'}}>Languge</h4>
                    <p>French: Native</p>
                    <p>English: Fluent</p>
                    <p>Kikongo: Native</p>
                    <p>Kikouni: Native</p>
                    <p>Le-Lary: Native</p>
                    <p>Lingala: Native</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <h4 style ={{color: 'grey'}}>References</h4>
                    <h5>Delwyn Woon</h5>
                    <p>Selection Team Leader</p>
                    <p>Foodstuff-Cold Storage, Palmerston North</p>
                    <p>0275693555</p>
                    <p>delwyn.woon@foodstuff.co.nz</p>
                    <h5>Sandra Cleland</h5>
                    <p>Lecturer business & Computer Studies</p>
                    <p>UCOL, Palmerston North</p>
                    <p>06 9527000</p>
                    <p>S.cleland@ucol.ac.nz</p>
                </Cell>
                <Cell  className="resume-right-col" col={8} style={{padding: '15px'}}>
                <h2 style={{textAlign: 'center'}}>Education</h2>
                <h4>Level 1-2 NCEA</h4>
                <Education startYear={2011}
                 endYear={2013}
                 schoolName="Palmerston North Boy's High School"
                schoolDescription="In 1902, Palmerston North High School was established as a co-educational secondary school with an initial roll of 84 students (40 boys and 44 girls, the first person being on the roll was a girl). The first classes were held at St Andrew's Presbyterian Church Sunday School hall. In 1920, Palmerston North High School was split into two single-sex schools."
                />
                <h4>Level 2-3 automotive</h4>
                <Education startYear={2013}
                 endYear={2014}
                 schoolName="Mara Marketing"
                schoolDescription="We are a fully NZQA accredited, well-established private training organisation with automotive training as our core business. Mara employs A grade technicians with a wide range of automotive experience ' over 280 years combined experience in all facets of the motor industry. Mara prides itself on delivering quality education to motivated graduates, many of whom build careers within the industry."
                />
                <h4>Bachelor In Information Comunication and Technology.</h4>
                <Education startYear={2015}
                 endYear={2018}
                 schoolName="UCOL - Universal College of LearninG" 
                schoolDescription="UCOL was founded in 1907 and was known as the Palmerston North Technical School. In 1971 it became the Palmerston North Technical Institute and in 1983 the Manawatu Polytechnic. At the time it specialised in trade apprenticeship courses, and in hobby, art, and craft classes, along with a range of night school programmes in business studies for working adults."
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>
                <h2 style={{textAlign: 'center'}}> Experience </h2>
                <Experience
                startYear={2016}
                endYear={2018}
                jobName="Foodstuff, Palmerston North"
                jobDescription="Supported installation and operations point of sale (POS) for automated orders.
                    	Monitored and analyzed system performance to provide recommendations for improvement, including system tuning and hardware integration.
                	    Fostered business relationship and provided significant increase in customer service, resulting in solidification of client base and significant revenue expansion
                "
                />
                <Experience
                startYear={2018}
                endYear={2018}
                jobName="Technical Assistant (Part-Time)"
                jobDescription="Supported installation and operations point of sale (POS) for automated orders.
                    	Monitored and analyzed system performance to provide recommendations for improvement, including system tuning and hardware integration.
                	    Fostered business relationship and provided significant increase in customer service, resulting in solidification of client base and significant revenue expansion"/>
                <hr style={{borderTop: '3px solid #e22947'}}/>
                <h2 style={{textAlign: 'center'}}>Skills</h2>
                <Skills
                skills="WORDPRESS"
                progress={85}
                />
                <Skills
                skills="BOOSTRAP"
                progress={85}
                />
                  <Skills
                skills="HTML & CSS"
                progress={85}
                />
                 
                 <Skills
                skills="C#"
                progress={65}
                />
                <Skills
                skills="JAVASCRIPT"
                progress={46}
                />
                  <Skills
                skills="REACT.JS, VUE.JS"
                progress={46}
                />
               
                  <Skills
                skills="SQL"
                progress={85}
                />
                 <Skills
                skills="VB"
                progress={75}
                />
                 <Skills
                skills="Android Studio"
                progress={75}
                />
                
                </Cell>
            </Grid>
        )
    }
}export default Resume;