/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import productApi from 'api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

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
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  //c
  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll({
          _page: 1,
          _limit: 6,
        });
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }

      setLoading(false);
    })();
  }, []);

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
                  <ProductSkeletonList length={6} />
                ) : (
                  <ProductList data={productList} />
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
