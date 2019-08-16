import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://miro.medium.com/fit/c/256/256/1*zn1TEDH9ADGQFdGvGOsS-Q.jpeg"
                            alt="avatar"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p> Redux | React | NodeJS | Rails | Ruby | Java | C++ | SQL </p>
                            <div className="social-logo">
                                {/* Linkedin in Logo  */}
                                <a href="https://linkedin.com/in/marcuswordlaw" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github in Logo  */}
                                <a href="https://github.com/tetragravity" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Medium in Logo  */}
                                <a href="https://medium.com/@TetraGravity" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-medium" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;