import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

FeaturedCategoryItem.propTypes = {
  category: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(3, 0),
    minHeight: '70px',

    '&> img': {
      width: '100px',
      height: '100px',
    },
  },
  name: { maxWidth: '112px', textAlign: 'center', minHeight: '40px' },
}));

function FeaturedCategoryItem({ category = {} }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img style={{}} src={category.imageUrl} alt="" />
      <Typography className={classes.name}>{category.name}</Typography>
    </Box>
  );
}

export default FeaturedCategoryItem;
