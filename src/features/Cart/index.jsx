import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsSlector, cartItemsCountSlector } from './selectors';
import CartList from 'features/Cart/components/CartList';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  makeStyles,
  Button,
} from '@material-ui/core';
import { formatPrice } from 'utils';
import { Grid } from '@mui/material';
import CartInfo from './components/CartInfo';
import { useHistory } from 'react-router-dom';

CartFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start !important',
    margin: theme.spacing(3, 0),
  },
  right: {},
  boxShownoti: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

function CartFeature(props) {
  const classes = useStyles();
  const cartItems = useSelector(cartItemsSlector);
  const history = useHistory();

  const handeClick = () => {
    history.push('/products');
  };
  return (
    <Container>
      {cartItems.length <= 0 && (
        <Paper lg={12} className={classes.boxShownoti}>
          <Typography style={{ margin: '10px 0' }}>
            Không có sản phẩm nào trong giỏ hàng của bạn.
          </Typography>
          <Button variant="contained" color="primary" onClick={handeClick}>
            Tiếp tục mua sắm
          </Button>
        </Paper>
      )}

      {cartItems.length > 0 && (
        <Box className={classes.root}>
          <Grid
            className={classes.container}
            spacing={2}
            container
            direction="row"
            justifyContent="space-between"
            style={{}}
          >
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Paper elevation={2}>
                <CartList cartItems={cartItems} />
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} className={classes.right}>
              <div></div>
              <CartInfo />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default CartFeature;
