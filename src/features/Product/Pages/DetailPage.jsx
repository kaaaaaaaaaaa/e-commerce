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
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/CartSlice';

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
  backToTop: {
    position: 'fixed',
    bottom: '5rem',
    right: '10rem',
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function DetailPage(props) {
  const {
    params: { productId },
    url,
  } = useRouteMatch(); //get param from url
  const classes = useStyles();
  const dispatch = useDispatch();

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
    dispatch(action);
    console.log(action);
  };

  return (
    <Box className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      <Box className={classes.backToTop}>
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ExpandLessIcon />
          </Fab>
        </ScrollTop>
      </Box>

      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

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
      </Container>
    </Box>
  );
}

export default DetailPage;
