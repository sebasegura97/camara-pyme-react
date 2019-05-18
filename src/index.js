import React, { Fragment } from 'react';
import { render } from 'react-dom'
import './index.css';
import AppRoutes from './pages/app/routes';
import AdminRoutes from './pages/admin/routes';
import * as serviceWorker from './serviceWorker';
import IndexLayout from './index-layout'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import store from './redux/store'

// ReactDOM.render(<App />, document.getElementById('root'));
const $app = document.getElementById('root')

render(
    <BrowserRouter>
        <Provider store={store}>
            <Fragment>
                <IndexLayout>
                    <Switch>
                        <Redirect exact from='/' to='/app/home' />
                        <Redirect exact from='/app' to='/app/home' />
                        <Redirect exact from='/admin' to='/admin/login' />
                        <Route path="/app" component={AppRoutes} />
                        <Route path="/admin" component={AdminRoutes} />
                    </Switch>
                </IndexLayout>
            </Fragment>
        </Provider>
    </BrowserRouter>
    ,
    $app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
