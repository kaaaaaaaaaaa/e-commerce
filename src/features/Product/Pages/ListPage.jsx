/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { useEffect } from 'react';
import productsApi from 'api/productApi';
import { useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '253px',
  },
  right: {
    flex: '1 1 0',
  },
}));
function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  //c
  console.log(loading);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll({
          _page: 1,
          _limit: 10,
        });
        // console.log(data);
        setProductList(data);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
      //After fetch product from api
      setLoading(false);
    })();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Box pt={3}>
        <Container>
          <Grid container spacing={0}>
            <Grid item className={classes.left}>
              <Paper variant="outlined" elevation={0}>
                Left collum
              </Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper variant="outlined" elevation={0}>
                {loading ? (
                  <ProductSkeletonList />
                ) : (
                  <productList data={productList}>drvdvdd</productList>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

ListPage.propTypes = {};

export default ListPage;
