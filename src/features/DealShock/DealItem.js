import { Box, makeStyles, Typography } from '@material-ui/core';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';
import './style.scss';

DealItem.propTypes = {
  deal: PropTypes.object,
  handleDealShockClick: PropTypes.func,
};
// reuse ProductThumbnail component for thumbnail of DealShock component
// <Typography>{deal.name}</Typography>;

const useStyles = makeStyles((theme) => ({
  root: {},

  priceBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),

    '&>span:first-child': {
      paddingRight: theme.spacing(2),
    },
  },
  salePrice: {
    fontWeight: 'bold',
    color: '#FF424E',
  },
  '.MuiBox-root': {
    display: 'flex',
    alignItem: 'center',
  },
  promotionPercent: {
    border: '2px solid #FF424E',
    borderRadius: '5px',
    padding: '0 3px',
    backgroundColor: 'rgb(255, 240, 241)',
  },
}));

function DealItem({ deal, handleItemClick }) {
  const classes = useStyles();

  const handleDealShockClick = () => {
    if (handleItemClick) {
      // console.log('click: ', deal);
      handleItemClick(deal);
    }
  };
  return (
    <Box className="deal" key={deal.index} onClick={handleDealShockClick}>
      <ProductThumbnail product={deal} />
      <Box className={classes.priceBox}>
        <Typography component="span" className={classes.salePrice}>
          {formatPrice(deal.salePrice)}
        </Typography>
        <Typography component="span" className={classes.promotionPercent}>
          -{deal.promotionPercent}%
        </Typography>
      </Box>
    </Box>
  );
}

export default DealItem;
