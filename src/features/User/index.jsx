import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ProfilePage from './Pages/PorfilePage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UserMenu from './components/UserMenu';
import PurchaseOrder from './components/PurchaseOrder';
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
import { useSelector } from 'react-redux';
import './style.scss';

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
    minWidth: '220px',
  },
  right: {
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
    fontSize: '10px',
  },
}));

function User(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  //get user from redux store
  const user = useSelector((state) => state.user.current);
  return (
    <Container>
      <Box className={classes.root}>
        <Paper elevation={2} className={classes.left}>
          <Box className={classes.user}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box className={classes.userInfo}>
              <Typography>{user.fullName}</Typography>
              <Box className={classes.edit}>
                <EditIcon color="action" />
                <Typography>Edit profile</Typography>
              </Box>
            </Box>
          </Box>
          <Divider light />
          <UserMenu />
        </Paper>
        <Box className={classes.right}>
          <Switch>
            <Route
              path={`${match.url}/account/profile`}
              component={ProfilePage}
            />
            <Route
              path={`${match.url}/notification`}
              component={Notification}
            />
            <Route
              path={`${match.url}/voucher-wallet`}
              component={VoucherWallet}
            />
            <Route path={`${match.url}/purchase`} component={PurchaseOrder} />
          </Switch>
        </Box>
      </Box>
    </Container>
  );
}

export default User;
