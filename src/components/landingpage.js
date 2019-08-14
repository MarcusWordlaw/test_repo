import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://avatars3.githubusercontent.com/u/43518274?s=460&v=4" 
                        alt="avatar"
                        className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p> Redux | React | NodeJS | Rails | Ruby | Java | C++ | SQL </p>
                            {/* Linkedin in Logo  */}
                            <a href="https://linkedin.com/in/marcuswordlaw" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }  
}
export default LandingPage;