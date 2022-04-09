import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    marginBottom: 0,
    padding: theme.spacing(4, 0),
    '& > li': {
      margin: theme.spacing(2, 4),
    },
    '& > li > a': {
      padding: theme.spacing(2, 4),
      fontSize: '22px',
      fontWeight: '600',
      color: 'var(--text-light)!important',
    },
    '& > li > a.active': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
}));
function ProductMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact={true}>
          Description
        </Link>
        <Link component={NavLink} to={`${url}/additional`} exact={true}>
          Additional Infomation
        </Link>
        <Link component={NavLink} to={`${url}/reviews`} exact={true}>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
