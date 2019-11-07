import React from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import AuthOrApp from './authOrApp'
import CardRecuperation from './components/login/recuperation/cardRecuperation'
import CardRecResult from './components/login/result/cardRecResult'
import App from './app'

export default (props:any) => (
    <Router>
        <Switch>
            <Route path="/" exact component={AuthOrApp} />
            <Route path="/recuperation/:type" exact component={CardRecuperation} />
            <Route path="/recuperation/result/:type" exact component={CardRecResult} />
            <Route path="/home" exact component={App} />
            <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
    </Router>
)