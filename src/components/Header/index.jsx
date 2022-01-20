import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Slide,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmojiNatureSharpIcon from '@material-ui/icons/EmojiNatureSharp';
import { AccountCircle, Close } from '@mui/icons-material';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#bbb2e9',
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
  },
  closeBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(4),
    zIndex: 1,
  },
  avatar: {
    margin: theme.spacing(0, 2),
  },
}));
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

function Header() {
  const [mode, setMode] = useState(MODE.LOGIN);
  const [open, setOpen] = useState();
  const loggegUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggegUser.id;

  //
  const dispatch = useDispatch();

  //hanle open menu user
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickUser = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  // handleLogout
  const handleLogoutClick = () => {
    dispatch(logout());
  };

  //
  const handleClickUserInfo = () => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link className={classes.logo} to="/">
            <EmojiNatureSharpIcon className={classes.menuButton} />
          </Link>
          <Typography variant="h6" className={classes.title}>
            Gardena
          </Typography>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink className={classes.link} to="/album">
            <Button color="inherit">Album</Button>
          </NavLink>
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
          {isLoggedIn && (
            <IconButton
              className={classes.avatar}
              color="inherit"
              onClick={handleClickUser}
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

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
      </Menu>

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
                <Button onClick={() => setMode(MODE.LOGIN)}>
                  Are you have account? Logi here
                </Button>
              </Box>
            </div>
          )}
          {mode === MODE.LOGIN && (
            <div>
              <Login handleCloseDialog={handleClose} />
              <Box textAlign="center">
                <Button color="inherit" onClick={() => setMode(MODE.REGISTER)}>
                  Are you have account? Register here
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
