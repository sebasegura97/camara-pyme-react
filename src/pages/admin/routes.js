import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AppLayout from './components/layout'
import Members from './members'
import News from './news'
import Login from './login';

class AdminRoutes extends Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    {/* <Route path="/admin/members" component={Members} /> */}
                    <Route path="/admin/members" component={Members} />
                    <Route path="/admin/news" component={News} />
                    <Route path="/admin/login" component={Login} />
                </Switch>
            </AppLayout>
        )
    }
}


export default AdminRoutes