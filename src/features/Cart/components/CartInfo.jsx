import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box, makeStyles, Button } from '@material-ui/core';
import { formatPrice } from 'utils';
import { useSelector } from 'react-redux';
import {
  cartItemsCountSlector,
  cartItemsSlector,
  cartItemsTotalSlector,
} from '../selectors';

CartInfo.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    padding: theme.spacing(0, 2),
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
  },
  box: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));
function CartInfo(props) {
  const classes = useStyles();
  const cartItemsTotalPrice = useSelector(cartItemsTotalSlector);
  const cartItems = useSelector(cartItemsSlector);

  console.log(cartItems.length);

  return (
    <Box className={classes.root} sx={{ display: { xs: 'none', md: 'block' } }}>
      <Paper className={classes.box} elevation={2}>
        <Typography component="h6">Giao tới</Typography>
        <Typography component="p">
          Nguyễn Phúc Ái 0376926290 83 Tân Lập ,Đông Hoà ,Dĩ An ,Bình Dương,
          Phường Đông Hòa, Thị xã Dĩ An, Bình Dương
        </Typography>
      </Paper>
      <Paper className={classes.box} elevation={2}>
        <Typography component="h6">Khuyến Mãi</Typography>
        <Typography component="span">có thể chọn 2</Typography>
        <Typography component="p">Chọn hoặc nhập Khuyến mãi khác</Typography>
      </Paper>
      <Paper className={classes.box} elevation={2}>
        <Typography component="h6">
          Total:
          <Typography style={{ fontWeight: 'bold' }} component="span">
            {cartItemsTotalPrice ? formatPrice(cartItemsTotalPrice) : 0}
          </Typography>
        </Typography>
      </Paper>
      <Button fullWidth variant="contained" color="primary">
        Mua{`(${cartItems.length})`}
      </Button>
    </Box>
  );
}

export default CartInfo;
