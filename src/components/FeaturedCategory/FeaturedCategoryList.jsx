import React from 'react';
import PropTypes from 'prop-types';
import FeaturedCategoryItem from './FeaturedCategoryItem';
import { Grid, makeStyles, Typography } from '@material-ui/core';

FeaturedCategoryList.propTypes = {
  categoryList: PropTypes.array,
};
const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
    overflow: 'auto',
  },
  categoryItem: {
    minHeight: '156px',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 20px',
      zIndex: 1,
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: '144px',
    },
  },
}));
function FeaturedCategoryList({ categoryList = [] }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      style={{ minWidth: '1200px' }}
      className={classes.root}
    >
      {categoryList.map((categoryItem) => (
        <Grid item className={classes.categoryItem} key={categoryItem.id}>
          <FeaturedCategoryItem category={categoryItem} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FeaturedCategoryList;
