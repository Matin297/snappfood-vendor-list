import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// COMPONENTS
import Layout from 'layout/layout';
import HomePage from 'pages/home/home';
import VendorsPage from 'pages/vendors/vendors';

const ROUTE_COMPONENTS = [
    { Component: HomePage, exact: true, path: '/' },
    { Component: VendorsPage, path: '/vendors', title: 'رستوران‌ها', hasLayout: true }
];

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {
                    ROUTE_COMPONENTS.map(({ Component, title, ...route }) => (
                        <Route
                            key={route.path}
                            {...route}
                            render={routeProps => {
                                if (route.hasLayout)
                                    return (
                                        <Layout title={title}>
                                            <Component {...routeProps} />
                                        </Layout>
                                    );

                                return <Component {...routeProps} />;
                            }}
                        />
                    ))
                }
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
