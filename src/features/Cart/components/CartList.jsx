import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setQuantity } from '../CartSlice';
import CartItem from './CartItem';
CartList.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function CartList({ cartItems }) {
  const dispatch = useDispatch();

  // const handleInputOnchange = async (value) => {
  //   // console.log('value');
  //   // dispatch(setQuantity({
  //   // }));
  // };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {cartItems.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      ))}

      {cartItems.length > 0 && (
        <Box>
          <Typography style={{ padding: '11px ' }}>
            Shop Khuyến Mãi Vui lòng chọn sản phẩm trước
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default CartList;
