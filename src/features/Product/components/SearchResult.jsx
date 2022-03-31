import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import { useRouteMatch } from 'react-router-dom';
import useProduct from '../hooks/useProducts';
import productApi from 'api/productApi';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import ProductItem from 'components/Product/ProductItem';
import { Pagination } from '@material-ui/lab';
import Loading from 'components/form-controls/Loading/Loading';

SearchResult.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    container: {},
  },
}));

function SearchResult(props) {
  const [searchedProduct, setSearchedProduct] = useState([]);
  // const { products, loading } = useProduct();
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  //   console.log(products);
  const {
    params: { value },
  } = useRouteMatch(); //get param from url
  // const [value, setvalueSearch] = useState(value);
  console.log('line 33: ', value);
  const handleSearchOnchange = (e) => {};
  useEffect(() => {
    (async () => {
      // setvalueSearch(value);

      try {
        console.log('line 39: ', value);
        setLoading(true);
        const result = await productApi.getAll({
          _page: null,
          _limit: null,
        });
        const filterData = await result.data.filter((item) => {
          return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
        setSearchedProduct(filterData);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
      setLoading(false);
    })();
  }, [value]);

  return (
    <Container className={classes.root}>
      <Paper className={classes.container}>
        <Grid container>
          {loading && <Loading />}

          {!loading &&
            searchedProduct.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductItem product={product} />
              </Grid>
            ))}
        </Grid>

        {/* <Box className={classes.pagination}>
          <Pagination
            mt={2}
            count={Math.ceil(pagination.total / pagination.limit)} // total page
            page={pagination.page} // current page
            onChange={handlepageChange}
          />
        </Box> */}
      </Paper>
    </Container>
  );
}

export default SearchResult;
