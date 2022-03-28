import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Box, Link, makeStyles } from '@material-ui/core';

UserMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',

    listStyleType: 'none',
    padding: '0',

    '& > a': {
      color: theme.palette.grey[700],
      padding: theme.spacing(1),
    },
    '& > a.active': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      //   fontWeight: 'bold',
    },
  },
}));

function UserMenu(props) {
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link component={NavLink} to={`${url}/notification`} exact={true}>
        Notification
      </Link>
      <Link component={NavLink} to={`${url}/voucher-wallet`} exact={true}>
        My Voucher
      </Link>
      <Link component={NavLink} to={`${url}/purchase`} exact={true}>
        Purchase Order
      </Link>
    </Box>
  );
}

export default UserMenu;
