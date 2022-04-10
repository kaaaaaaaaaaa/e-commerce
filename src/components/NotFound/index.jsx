import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

NotFound.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '56vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textAlert: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
  },
}));

function NotFound(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img
        src="https://i.pinimg.com/originals/2c/9f/70/2c9f70c48fddd88953171b2a63d08506.png"
        alt=""
      />
      <Box className={classes.textAlert}>
        <Typography component="p">No result is found.</Typography>
        <Typography component="p">
          Try searching with another keyword
        </Typography>
      </Box>
    </Box>
  );
}

export default NotFound;
