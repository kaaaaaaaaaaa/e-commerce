import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={ListPage} exact />
      </Switch>
    </div>
  );
}

ProductFeature.propTypes = {};

export default ProductFeature;
