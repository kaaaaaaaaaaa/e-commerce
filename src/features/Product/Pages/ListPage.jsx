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
import { Pagination } from '@material-ui/lab';

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
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1, //current page
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ _limit: 9, _page: 1 });
  //c
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        console.log({ data, pagination });
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  /// pagination
  const handlepageChange = (e, page) => {
    setFilters((preFilter) => ({
      ...preFilter,
      _page: page,
    }));
  };
  //
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
                  <ProductSkeletonList length={9} />
                ) : (
                  <ProductList data={productList} />
                )}

                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)} // total page
                  page={pagination.page} // current page
                  onChange={handlepageChange}
                />
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
