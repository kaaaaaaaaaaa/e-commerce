/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '253px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
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
  const [filters, setFilters] = useState({
    _limit: 9,
    _page: 1,
    _sort: 'salePrice:ASC',
  });
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
  const handleSortChange = (newSortValue) => {
    setFilters((preFilter) => ({
      ...preFilter,
      _sort: newSortValue,
    }));
  };
  const handleFiltersChange = (newFilters) => {
    console.log(newFilters);
    setFilters((preFilter) => ({
      ...preFilter,
      ...newFilters,
    }));
  };
  //
  return (
    <Box pt={3}>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper variant="outlined" elevation={2}>
              <ProductFilter filters={filters} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper variant="" elevation={2}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              {loading ? (
                <ProductSkeletonList length={9} />
              ) : (
                <ProductList data={productList} />
              )}

              <Box className={classes.pagination}>
                <Pagination
                  mt={2}
                  count={Math.ceil(pagination.total / pagination.limit)} // total page
                  page={pagination.page} // current page
                  onChange={handlepageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
