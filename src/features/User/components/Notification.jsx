import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from '@material-ui/core';

Notification.propTypes = {};

function Notification(props) {
  return (
    <Box>
      <Paper className="right-content"> Notification</Paper>
    </Box>
  );
}

export default Notification;
