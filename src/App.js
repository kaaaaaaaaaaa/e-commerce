import Header from 'components/Header';
import CartFeature from 'features/Cart';
import HotDealPage from 'features/DealShock/Pages/HotDealPage';
import ProductFeature from 'features/Product';
import SearchResult from 'features/Product/components/SearchResult';
import CategoryPage from 'features/Product/Pages/CategoryPage';
import MainPage from 'features/Product/Pages/MainPage';
import User from 'features/User';
import { Redirect, Route, Switch } from 'react-router-dom';
import theme from './styles/GlobalStyle';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Box,
  Fab,
  Toolbar,
  makeStyles,
  Zoom,
  useScrollTrigger,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  // hide tool back To Top
  backToTopAnchor: {
    minHeight: '0px !important',
    [theme.breakpoints.up('sm')]: {
      minHeight: '0px !important',
    },
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
function App(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      {/* ====back to top component ==== */}

      <Toolbar className={classes.backToTopAnchor} id="back-to-top-anchor" />
      <Box className={classes.backToTop}>
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ExpandLessIcon />
          </Fab>
        </ScrollTop>
      </Box>

      {/* ================================ */}
      <div className="App">
        <Header />
        <Switch>
          <Redirect from="/home" to="/" exact />
          <Route path="/products" component={ProductFeature}></Route>
          <Route path="/cart" component={CartFeature}></Route>
          <Route path="/deal" exact component={HotDealPage} />
          <Route path="/category/:id" exact component={CategoryPage}></Route>
          <Route path="/user" component={User} />
          <Route path="/search=:value" component={SearchResult} />

          <Route path="/" exact component={MainPage}></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
