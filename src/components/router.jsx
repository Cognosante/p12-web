import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export default function AppRouter(props) {
  const { notFound, routes = [] } = props;
  const homeRoute = routes.find(r => !!r.home);
  if (!homeRoute) throw new Error('Home not configured. At least one route needs to have home:true');

  return (
    <Router>
      <Suspense fallback={null}>
        <Switch>
          <Redirect from="/" to={homeRoute.path} exact />
          {routes.map((route, i) => (
            <Route path={route.path} component={route.component} />
          ))}
          <Route component={notFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

AppRouter.propTypes = {
  notFound: PropTypes.elementType,
  unauthorized: PropTypes.elementType,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      component: PropTypes.elementType,
      home: PropTypes.bool
    })
  )
};
