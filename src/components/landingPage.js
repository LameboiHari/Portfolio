import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Avatar from '../images/avatar.png'

class Landing extends Component {
    render() {
        return(
            <div>
                <Grid className="landingGrid">
                    <Cell col={12}>
                       <img src={Avatar} alt="Avatar" className="avatar-img"/>
                       
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p> HTML/CSS | JavaScript | React | Angular | NodeJS | Express | MongoDB |</p>

                            <div className="social-links">
                                 {/* LinkedIn */}
                                 <a href="www.linkedin.com/in/turksonjohn" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                 </a>

                                {/* GitHub */}
                                <a href="https://github.com/LameboiHari" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;