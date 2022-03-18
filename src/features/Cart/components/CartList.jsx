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
import { removeFromCart, setQuantity } from '../CartSlice';
import CartItem from './CartItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
CartList.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
  },
}));

function CartList({ cartItems }) {
  const dispatch = useDispatch();

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
