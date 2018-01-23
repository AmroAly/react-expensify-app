
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import NotFound from './../components/NotFound';
import AddExpensePage from './../components/AddExpensePage';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoutes exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
