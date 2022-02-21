import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsSlector } from './selectors';
import CartList from 'features/Cart/components/CartList';
import { Box, Container, Typography, Paper, Divider } from '@material-ui/core';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItems = useSelector(cartItemsSlector);
  console.log(cartItems);
  return (
    <Container>
      <Paper style={{ margin: '24px 0' }}>
        <CartList cartItems={cartItems} />

        {cartItems.length > 0 && (
          <Typography style={{ padding: '11px 16px' }}>
            Shop Khuyến Mãi Vui lòng chọn sản phẩm trước
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default CartFeature;
