import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Fab,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
  Toolbar,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReview from '../components/ProductReview';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'features/Cart/CartSlice';
import { useSnackbar } from 'notistack';
import { cartItemsSlector } from 'features/Cart/selectors';

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  left: {
    width: '450px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
  loading: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
  },
  productDetail: {
    padding: theme.spacing(0, 2),

    minHeight: '200px',
  },
}));

function DetailPage(props) {
  const classes = useStyles();

  const {
    params: { productId },
    url,
  } = useRouteMatch(); //get param from url
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const cartItems = useSelector(cartItemsSlector);
  // console.log(cartItems);
  const productInCart = cartItems.find(
    (item) => item.id === Number.parseInt(productId)
  );
  // console.log(productInCart);

  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    console.log('from add to cart submit');
    const action = addToCart({
      id: product.id,
      product,
      quantity: quantity,
    });
    const toltalOf2Cart = quantity + productInCart?.quantity;
    // console.log(toltalOf2Cart);
    if (toltalOf2Cart > 5) {
      enqueueSnackbar('The maximum purchase quantity of this product is 5.', {
        variant: 'default',
      });
      // alert(`${quantity} + ${productInCart.quantity} = ${toltalOf2Cart}`);
    } else {
      dispatch(action);
      enqueueSnackbar('Added to cart successfully!.', { variant: 'success' });
    }

    // console.log(action);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm
                product={product}
                onSubmit={handleAddToCartSubmit}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.productDetail}>
          <ProductMenu />
          <Switch>
            <Route exact={true} path={url}>
              <ProductDescription product={product} />
            </Route>
            <Route exact={true} path={`${url}/additional`}>
              <ProductAdditional product={product} />
            </Route>
            <Route exact={true} path={`${url}/reviews`}>
              <ProductReview product={product} />
            </Route>
          </Switch>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
