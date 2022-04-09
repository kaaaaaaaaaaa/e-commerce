import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
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
import ProductSkeletonList from '../components/ProductSkeletonList';

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
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {
    params: { id },
  } = useRouteMatch();

  console.log(loading);
  const params = {
    'category.id': id,
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, pagination } = await productApi.getAll(params);
        console.log(data);
        setCategoryList(data);
      } catch (error) {
        console.log('Failed to fetch data category ', error);
      }
      setLoading(false);
    })();
  }, []);
  const handleProductClick = async (item) => {
    history.push(`/products/${item.id}`);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.container}>
        <Typography variant="h5">{`Danh muc: ${id}`}</Typography>

        {loading && <ProductSkeletonList length={9} />}
        {!loading && (
          <Grid container>
            {categoryList.map((item) => (
              <Grid key={item.id} item lg={3} md={4} sm={4} xs={6}>
                <ProductItem
                  handleItemClick={handleProductClick}
                  Cl
                  product={item}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Container>
  );
}

export default CategoryPage;
