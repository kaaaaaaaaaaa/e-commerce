import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';
import { Box } from '@mui/material';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  description: {
    overflow: 'hidden',
    // width: '100%',
    // img: {
    //   overflow: 'hidden',
    // },
  },
}));

function ProductDescription({ product = {} }) {
  const classes = useStyles();
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Box className={classes.description} style={{ padding: '20px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
    </Box>
  );
}

export default ProductDescription;
