import React from 'react'
import { Switch } from 'react-router-dom'
import {Route} from 'react-router-dom'

import LandingPage from './landingPage'
import Resume from './resume'
import Contact from './contact'
import Projects from './projects'
import AboutMe from './about'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />

    </Switch>
)

export default Main;