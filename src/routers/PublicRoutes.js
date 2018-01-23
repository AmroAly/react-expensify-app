
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoutes = ({
    isAuthenticated,
    component: Component
}) => (
    <Route component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />   
        )   
    )} />
);

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: !!auth.uid
});

export default connect(mapStateToProps)(PublicRoutes);