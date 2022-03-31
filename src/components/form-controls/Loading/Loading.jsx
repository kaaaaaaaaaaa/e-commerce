import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Box } from '@material-ui/core';

Loading.propTypes = {};

function Loading(props) {
  return (
    <Box className="loading">
      <div className="overlay-modal"></div>
      <div class="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
}

export default Loading;
