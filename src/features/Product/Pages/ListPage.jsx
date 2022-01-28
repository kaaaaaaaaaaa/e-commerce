/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import categoriesApi from 'api/categoryApi';
import productApi from 'api/productApi';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FilterViewer from '../components/FilterViewer';
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
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const location = useLocation();

  const queryParams = useMemo(() => {
    // true => "true"
    // { isPromotion: 'true'}
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number(params._page) || 1,
      _limit: Number(params._limit) || 9,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true', // true => when  params._isPromotion === 'true'
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1, //current page
  });
  const [loading, setLoading] = useState(true);
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number(queryParams._page) || 1,
  //   _limit: Number(queryParams._limit) || 9,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // }));

  // when filter change => set param url
  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname, // current PATHNAME
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        console.log({ data, pagination });
        setProductList(data);
        setPagination(pagination);

        //
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  /// pagination
  const handlepageChange = (e, page) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   _page: page,
    // }));
    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname, // current PATHNAME
      search: queryString.stringify(filters),
    });
  };
  const handleSortChange = (newSortValue) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   _sort: newSortValue,
    // }));

    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname, // current PATHNAME
      search: queryString.stringify(filters),
    });
  };
  //
  const handleFiltersChange = (newFilters) => {
    // console.log(newFilters);
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   ...newFilters,
    // }));
    const filters = {
      ...queryParams,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname, // current PATHNAME
      search: queryString.stringify(filters),
    });
  };
  //
  const setnewFilters = (newFilters) => {
    // setFilters(newFilters);
    history.push({
      pathname: history.location.pathname, // current PATHNAME
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box pt={3}>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={2}>
              <ProductFilter
                filters={queryParams}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper variant="outlined" elevation={2}>
              <ProductSort
                currentSort={queryParams._sort}
                onChange={handleSortChange}
              />
              <FilterViewer filters={queryParams} onChange={setnewFilters} />

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
