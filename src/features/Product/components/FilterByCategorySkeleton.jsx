import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

FilterByCategorySkeleton.propTypes = {
  length: PropTypes.number,
};
FilterByCategorySkeleton.defaultProps = {
  length: 6,
};

function FilterByCategorySkeleton({ length }) {
  return (
    <Box>
      {Array.from(new Array(length)).map((item, index) => (
        <Skeleton key={index} width="70%" style={{ marginTop: '8px' }} />
      ))}
    </Box>
  );
}

export default FilterByCategorySkeleton;
