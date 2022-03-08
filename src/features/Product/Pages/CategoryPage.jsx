import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductItem from 'components/Product/ProductItem';
import ProductList from '../components/ProductList';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

CategoryPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
  },
}));

function CategoryPage(props) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const {
    params: { id },
  } = useRouteMatch();
  const params = {
    'category.id': id,
  };
  useEffect(() => {
    (async () => {
      const { data, pagination } = await productApi.getAll(params);
      console.log(data);
      setCategoryList(data);
    })();
  }, []);

  return (
    <Container className={classes.root}>
      <Typography variant="h5">{`Danh muc: ${id}`}</Typography>
      <Paper className={classes.container}>
        <Grid container>
          {categoryList.map((item) => (
            <Grid key={item.id} item lg={3} md={4} sm={4} xs={6}>
              <ProductItem product={item} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default CategoryPage;
