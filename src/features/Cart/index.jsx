import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsSlector } from './selectors';
import CartList from 'features/Cart/components/CartList';
import { Box, Container, Typography, Paper } from '@material-ui/core';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItems = useSelector(cartItemsSlector);
  console.log(cartItems);
  return (
    <Container>
      <Paper style={{ padding: '5px 0' }}>
        <CartList cartItems={cartItems} />
      </Paper>
    </Container>
  );
}

export default CartFeature;
