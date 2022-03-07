import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import DetailPage from './Pages/DetailPage';
import HotDealPage from '../DealShock/Pages/HotDealPage';

function ProductFeature(props) {
  const match = useRouteMatch();
  // console.log(match);
  return (
    <div>
      <Switch>
        <Route path={match.url} component={ListPage} exact />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

ProductFeature.propTypes = {};

export default ProductFeature;
