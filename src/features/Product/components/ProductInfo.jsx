import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  priceBox: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
  },
  salePrice: {
    fontSize: theme.typography.h4.fontSize,
    marginRight: theme.spacing(3),
    fontWeight: 'bold',
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
  promotionPercent: {
    padding: theme.spacing(0.3, 0.4),
    border: '0.7px solid black',
    borderRadius: '4px',
    fontWeight: '500',
  },
  freeShip: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),

    '&> img': {
      width: '78px',
      height: '13px',
      marginRight: theme.spacing(1),
    },
  },
}));

function ProductInfo({ product }) {
  const classes = useStyles();
  const {
    name,
    shortDescription,
    salePrice,
    originalPrice,
    promotionPercent,
    isFreeShip,
  } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <React.Fragment>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              {` -${promotionPercent}%`}
            </Box>
          </React.Fragment>
        )}
        {isFreeShip && (
          <Box className={classes.freeShip}>
            <img
              src="https://salt.tikicdn.com/ts/upload/21/b3/00/bab4964906fcb6c56d57d9d69a6b2995.png"
              alt="feeship"
            />
            <Typography> Miễn phí Vận chuyển</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
