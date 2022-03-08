import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, makeStyles } from '@material-ui/core';
import CategoryList from './CategoryList';
import categoriesApi from 'api/categoryApi';
import { useHistory } from 'react-router-dom';

Category.propTypes = {
  categoryList: PropTypes.array,
};
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: theme.spacing(3.2),
    backgroundColor: '#fff',
    padding: theme.spacing(1.5, 1),
  },
}));
function Category() {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await categoriesApi.getAll();

      setCategoryList(response);
    })();
  }, []);
  //
  const onCategoryClick = (category) => {
    // console.log(category);
    history.push(`/category/${category.id}`);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <CategoryList
          categoryList={categoryList}
          onCategoryClick={onCategoryClick}
        />
      </Container>
    </Box>
  );
}

export default Category;
