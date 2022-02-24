import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

CategoryItem.propTypes = {};

function CategoryItem({ category }) {
  return <li> {category} </li>;
}

export default CategoryItem;
