import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ProfilePage from './Pages/PorfilePage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UserMenu from './components/UserMenu';
import EditIcon from '@material-ui/icons/Edit';
import {
  Avatar,
  Container,
  makeStyles,
  Paper,
  Typography,
  Divider,
} from '@material-ui/core';
import Notification from './components/Notification';
import VoucherWallet from './components/VoucherWallet';

User.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    margin: theme.spacing(2, 0),
  },
  left: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    width: '300px',
  },
  right: {
    padding: theme.spacing(2),
    width: '100%',
    height: '100%',
  },
  userInfo: {
    padding: theme.spacing(0, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  user: {
    padding: theme.spacing(1),

    display: 'flex',
  },
  edit: {
    display: 'flex',
  },
}));

function User(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  const user = JSON.parse(localStorage.getItem('user')) || {};
  return (
    <Container className={classes.root}>
      <Paper elevation={2} className={classes.left}>
        <Box className={classes.user}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box className={classes.userInfo}>
            <Typography>{user.fullName}</Typography>
            <Box className={classes.edit}>
              <EditIcon />
              <Typography>Edit profile</Typography>
            </Box>
          </Box>
        </Box>
        <Divider light />
        <UserMenu />
      </Paper>
      <Paper elevation={2} className={classes.right}>
        <Switch>
          <Route
            path={`${match.url}/account/profile`}
            component={ProfilePage}
          />
          <Route path={`${match.url}/notification`} component={Notification} />
          <Route
            path={`${match.url}/voucher-wallet`}
            component={VoucherWallet}
          />
        </Switch>
      </Paper>
    </Container>
  );
}

export default User;
