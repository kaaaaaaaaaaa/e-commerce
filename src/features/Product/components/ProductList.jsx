import { Box, Grid, Typography } from '@material-ui/core';
import ProductItem from 'components/Product/ProductItem';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
import { useHistory } from 'react-router-dom';
import NotFound from 'components/NotFound';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  const history = useHistory();
  const handleProductClick = (product) => {
    history.push(`/products/${product.id}`);
  };
  return (
    <Box>
      <Grid container>
        {data.length === 0 && <NotFound />}
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <ProductItem
              product={product}
              handleItemClick={handleProductClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
