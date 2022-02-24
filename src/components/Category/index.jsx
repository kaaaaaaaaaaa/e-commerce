import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, makeStyles } from '@material-ui/core';
import CategoryList from './CategoryList';
import categoriesApi from 'api/categoryApi';

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

  useEffect(() => {
    (async () => {
      const response = await categoriesApi.getAll();

      console.log(response);
      setCategoryList(response.map((item) => item.name));
    })();
  }, []);
  //
  console.log(categoryList);
  return (
    <Box className={classes.root}>
      <Container>
        <CategoryList categoryList={categoryList} />
      </Container>
    </Box>
  );
}

export default Category;
