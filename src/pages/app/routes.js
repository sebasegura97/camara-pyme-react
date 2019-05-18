import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AppLayout from './components/layout'
import Home from './index'
import Membership from './membership'
import News from './news'
import FullNew from './full-new'

class AppRoutes extends Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/membership" component={Membership} />
                    <Route path="/app/news" component={News} />
                    <Route path="/app/full-new" component={FullNew} />
                </Switch>
            </AppLayout>
        )
    }
}

export default AppRoutes