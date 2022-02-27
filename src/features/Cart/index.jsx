import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsSlector, cartItemsTotalSlector } from './selectors';
import CartList from 'features/Cart/components/CartList';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  makeStyles,
} from '@material-ui/core';

CartFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function CartFeature(props) {
  const classes = useStyles();
  const cartItems = useSelector(cartItemsSlector);
  const cartItemsTotalPrice = useSelector(cartItemsTotalSlector);
  // console.log(cartItemsTotalPrice);
  // console.log(cartItems);
  return (
    <Container>
      <Paper style={{ margin: '24px 0' }}>
        <CartList cartItems={cartItems} />

        {cartItems.length > 0 && (
          <Box className={classes.root}>
            <Typography style={{ padding: '11px 16px' }}>
              Shop Khuyến Mãi Vui lòng chọn sản phẩm trước
            </Typography>
            <Box style={{ padding: '11px 16px' }}>
              Total: {cartItemsTotalPrice}
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default CartFeature;
