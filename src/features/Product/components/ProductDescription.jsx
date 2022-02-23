import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: '20px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
    </Paper>
  );
}

export default ProductDescription;