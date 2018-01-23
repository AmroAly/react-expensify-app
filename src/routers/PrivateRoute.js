
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './../components/Header';

export const PrivateRoute = ({ 
    isAuthencicated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthencicated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ): (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = ({ auth }) => {
    return { isAuthencicated: !!auth.uid };
};

export default connect(mapStateToProps)(PrivateRoute);