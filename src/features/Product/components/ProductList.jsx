import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Product from './Product';

productList.propTypes = {
  length: PropTypes.number,
};
productList.defaultProps = {
  length: 6,
};

function productList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((item, index) => (
          <Grid item key={index} xs={12} sm={6} lg={3}>
            <Box padding={1}>
              <Product />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default productList;
