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
  const history = useHistory();
  const dispatch = useDispatch();
  const handeClick = () => {
    history.push('/products');
  };
  // const handleInputOnchange = async (value) => {
  //   // console.log('value');
  //   // dispatch(setQuantity({
  //   // }));
  // };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5">Giỏ hàng</Typography>

      {cartItems.length <= 0 && (
        <Box>
          <Typography>Không có sản phẩm nào trong giỏ hàng của bạn.</Typography>
          <Button variant="contained" color="primary" onClick={handeClick}>
            Tiếp tục mua sắm
          </Button>
        </Box>
      )}
      {cartItems.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      ))}
    </Box>
  );
}

export default CartList;
