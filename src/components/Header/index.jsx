import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles, alpha } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmojiNatureSharpIcon from '@material-ui/icons/EmojiNatureSharp';
import SearchIcon from '@material-ui/icons/Search';
import { AccountCircle, Close } from '@mui/icons-material';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import logo from '../../assets/logo.png';
import {
  cartItemsCountSlector,
  cartItemsSlector,
} from 'features/Cart/selectors';
import { useHistory } from 'react-router-dom';
import useProduct from 'features/Product/hooks/useProducts';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/GlobalStyle';
import './style.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  appBar: {
    // backgroundColor: 'var(--primary)',
    background: 'var(--header-color)',
    height: '80px',
    display: 'flex',
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    // '&> '
    '&>.MuiContainer-root': {
      padding: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  logo: {
    color: '#F3C301',
    '&>img': {
      width: '40%',
      // height: '50px',
      filter:
        'invert(48%) sepia(13%) saturate(3275%) hue-rotate(1039deg) brightness(391%) contrast(194%)',
      [theme.breakpoints.down('sm')]: {
        width: '70%',
      },
    },
  },
  closeBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(4),
    zIndex: 1,
  },
  avatar: {
    // margin: theme.spacing(0, 0, 0, 2),
  },
  searchBox: {
    margin: theme.spacing(0, 10),
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0, 2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'secondary',
  },
  inputRoot: {
    border: '1px solid var(--secondary)',
    borderRadius: 'inherit',
  },
  inputInput: {
    color: 'var(--secondary)',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

function Header() {
  console.log(theme);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [open, setOpen] = useState();
  const loggegUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggegUser.id;
  const cartItemsCount = useSelector(cartItemsCountSlector);
  const cartItems = useSelector(cartItemsSlector);

  const history = useHistory();
  const [valueSearch, setvalueSearch] = useState('');

  //
  const dispatch = useDispatch();

  //hanle open menu user
  // const [anchorEl, setAnchorEl] = useState(null);
  // const handleClickUser = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  // };
  // // handleLogout
  // const handleLogoutClick = () => {
  //   dispatch(logout());
  // };

  //
  const handleClickUserInfo = () => {
    // history.push('/user/account/profile');
    history.push('/user/purchase');
  };

  //handle input change
  const handleSearchOnchange = (e) => {
    setvalueSearch(e.target.value);
  };

  const handleSearchOnkeyUp = (e) => {
    if (e.key === 'Enter') {
      if (valueSearch.trim() === '') return;
      history.push('/search=' + valueSearch);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleCartClick() {
    history.push('/cart');
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Container>
          <Toolbar>
            <Link className={classes.logo} to="/">
              {/* <EmojiNatureSharpIcon className={classes.menuButton} /> */}
              {/* <CodeSharpIcon /> */}
              <img src={logo} alt="" />
            </Link>
            <Typography variant="h6" className={classes.title}></Typography>
            <Box className={classes.searchBox} xs={0}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ color: 'var(--secondary)' }} />
                </div>
                <InputBase
                  color="secondary"
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  value={valueSearch}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={(e) => handleSearchOnchange(e)}
                  onKeyUp={(e) => handleSearchOnkeyUp(e)}
                />
              </div>
            </Box>

            <NavLink className={classes.link} to="/products">
              <Button color="secondary">Products</Button>
            </NavLink>

            {!isLoggedIn && (
              <Button color="secondary" onClick={handleClickOpen}>
                Login
              </Button>
            )}
            <IconButton
              aria-label="show 4 new mails"
              color="secondary"
              onClick={handleCartClick}
            >
              <Badge badgeContent={cartItems.length}>
                <ShoppingCartIcon style={{ color: 'var(--secondary)' }} />
              </Badge>
            </IconButton>
            {isLoggedIn && (
              <IconButton
                className={classes.avatar}
                color="secondary"
                onClick={handleClickUserInfo}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* 
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClickUserInfo}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu> */}

      <Dialog
        disableEscapeKeyDown
        // disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <div>
              <Register handleCloseDialog={handleClose} />
              <Box textAlign="center">
                Are you have account?
                <Button onClick={() => setMode(MODE.LOGIN)}>Login here</Button>
              </Box>
            </div>
          )}
          {mode === MODE.LOGIN && (
            <div>
              <Login handleCloseDialog={handleClose} />
              <Box textAlign="center">
                Are you have account?
                <Button onClick={() => setMode(MODE.REGISTER)}>
                  Register here
                </Button>
              </Box>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Header;
