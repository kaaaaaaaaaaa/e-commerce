import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categoriesApi from 'api/categoryApi';
import FilterByCategorySkeleton from '../FilterByCategorySkeleton';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: '0',
    margin: '0',
    listStyleType: 'none',
    '&>li': {
      marginTop: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const category = await categoriesApi.getAll();
        console.log(category);
        // get category name
        setCategoryList(
          category.map((item) => ({ id: item.id, name: item.name }))
        );
      } catch (error) {
        console.log('Failed to fetch category', error);
      }

      setLoading(true);
    })();
  }, []);

  const handelCategoryClick = (category) => {
    if (onChange) onChange(category.id);
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM </Typography>

      {!loading && <FilterByCategorySkeleton length={6} />}
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handelCategoryClick(category)}>
            <Typography variant="body2"> {category.name} </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
