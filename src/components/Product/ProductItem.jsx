import { Box, makeStyles, Typography } from '@material-ui/core';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

ProductItem.propTypes = {
  product: PropTypes.object,
  handleDealShockClick: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  product: {
    padding: '8px 20px',
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 20px',
      zIndex: 1,
    },
  },
  priceBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: theme.spacing(1),

    '&>span:first-child': {
      paddingRight: theme.spacing(2),
    },
  },
  name: {
    margin: '5px',
  },
  salePrice: {
    fontWeight: 'bold',
    // color: '#FF424E',
  },
  '.MuiBox-root': {
    display: 'flex',
    alignItem: 'center',
  },
  promotionPercent: {
    border: '.5px solid #ccc',
    borderRadius: '5px',
    padding: '0 3px',
    // backgroundColor: 'rgb(255, 240, 241)',
  },
}));

function ProductItem({ product, handleItemClick }) {
  const classes = useStyles();

  const onClickProduct = () => {
    if (handleItemClick) {
      handleItemClick(product);
    }
  };
  return (
    <Box
      className={classes.product}
      key={product.index}
      onClick={onClickProduct}
    >
      <ProductThumbnail product={product} />
      <Typography component="p" className={classes.name}>
        {product.name}
      </Typography>
      <Box className={classes.priceBox}>
        <Typography component="span" className={classes.salePrice}>
          {formatPrice(product.salePrice)}
        </Typography>
        {product.promotionPercent > 0 && (
          <Typography component="span" className={classes.promotionPercent}>
            -{product.promotionPercent}%
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ProductItem;
