import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import { formatPrice } from 'utils';
import { useDispatch } from 'react-redux';
import { removeFromCart, setQuantity } from '../CartSlice';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import QuantityField from 'components/form-controls/QuantityField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Quantity from './Quantity';

CartItem.propTypes = {
  cart: PropTypes.object,
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  left: {
    width: '120px',
  },
  right: {
    display: 'flex',
    flex: '1 1 0',
    padding: theme.spacing(1.5),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  name: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  priceBox: {
    padding: theme.spacing(1),
  },
  salePrice: {
    fontSize: theme.typography.h6.fontSize,
    marginRight: theme.spacing(3),
    fontWeight: 'bold',
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
  promotionPercent: {
    // padding: theme.spacing(0.3, 0.4),
    // border: '0.7px solid black',
    // borderRadius: '4px',
    // fontWeight: '500',
    fontSize: '13px',
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
  total: {
    margin: theme.spacing(0, 2),
  },
}));

function CartItem({ cart }) {
  const classes = useStyles();
  const { name, salePrice, originalPrice, promotionPercent } = cart.product;
  const dispatch = useDispatch();
  const schema = yup
    .object({
      quantity: yup
        .number()
        .required('Please Enter a quantity')
        .min(1, 'Please enter at least 1.')
        .typeError('please enter a number.'),
    })
    .required();

  //
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });
  const handleInputOnchange = async (value) => {
    console.log(value);
    dispatch(setQuantity({ id: cart.id, quantity: value }));

    // setValue(3);
    // form.reset();
  };

  const handleRemoveCartItem = () => {
    dispatch(removeFromCart(cart.id));
  };
  const caculateTotalPrice = () => {
    console.log('caculate');
  };

  //   <QuantityField
  //   name="quantity"
  //   form={form}
  //   onChange={handleInputOnchange}
  // />
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item className={classes.left}>
          <ProductThumbnail product={cart.product} />
        </Grid>
        <Grid item>
          <Typography className={classes.name}>{name}</Typography>
        </Grid>
        <Grid item className={classes.right}>
          <Grid item>
            <Typography className={classes.salePrice}>
              {formatPrice(salePrice)}
            </Typography>

            {promotionPercent > 0 && (
              <Box className={classes.priceBox}>
                <Box component="span" className={classes.originalPrice}>
                  {formatPrice(originalPrice)}
                </Box>
              </Box>
            )}
          </Grid>
          <Grid item>
            <Quantity
              cart={cart}
              name="quantity"
              label="Quantity"
              form={form}
              onChange={handleInputOnchange}
            />
          </Grid>
          <Grid item className={classes.total}>
            {cart.quantity > 0 &&
              formatPrice(Number.parseInt(cart.quantity) * salePrice)}
          </Grid>
          <Grid item>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleRemoveCartItem}
            >
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartItem;
