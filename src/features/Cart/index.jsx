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

CartFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    // position: 'relative',
    alignItems: 'flex-start',
  },
  '&>	.MuiGrid-root': {
    position: 'relative',
  },
  container: {
    padding: '16px',
    position: 'relative',
  },
  right: {},
}));

function CartFeature(props) {
  const classes = useStyles();
  const cartItems = useSelector(cartItemsSlector);
  // console.log(cartItemsTotalPrice);
  // console.log(cartItems);
  return (
    <Container>
      <Box className={classes.root} style={{ margin: '24px 0' }}>
        <Grid
          className={classes.container}
          spacing={2}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{}}
        >
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Paper elevation={2}>
              <CartList cartItems={cartItems} />
            </Paper>
          </Grid>
          {cartItems.length > 0 && (
            <Grid item lg={4} md={4} className={classes.right}>
              <div></div>
              <CartInfo />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default CartFeature;
