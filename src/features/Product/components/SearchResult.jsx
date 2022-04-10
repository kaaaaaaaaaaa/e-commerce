import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import productApi from 'api/productApi';
import NotFound from 'components/NotFound';
import ProductItem from 'components/Product/ProductItem';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import ProductSkeletonList from './ProductSkeletonList';

SearchResult.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(1, 0),
  },
  title: { fontWeight: 'bold', padding: theme.spacing(1) },
  container: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 1),
  },
}));

function SearchResult(props) {
  const [searchedProduct, setSearchedProduct] = useState([]);
  const location = useLocation();
  const history = useHistory();
  // console.log(location);

  // const { products, loading } = useProduct();
  const queryParams = queryString.parse(location.search);
  console.log(queryParams);

  const [loading, setLoading] = useState(false);
  const match = useRouteMatch();
  console.log(match);

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

        console.log(filterData);
        setSearchedProduct(filterData);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
      setLoading(false);
    })();
  }, [value]);

  return (
    <Container className={classes.root}>
      {loading && <ProductSkeletonList length={searchedProduct.length} />}
      {!loading && (
        <Paper className={classes.container}>
          <Typography className={classes.title} variant="h5">
            Kết quả tìm kiếm với '{value}' :
          </Typography>
          {searchedProduct.length <= 0 ? (
            <NotFound />
          ) : (
            <Box>
              <Typography>
                Có
                <Typography
                  style={{ fontWeight: 'bold', margin: '0 4px' }}
                  component="span"
                >
                  {searchedProduct.length}
                </Typography>
                sản phẩm được tìm thấy
              </Typography>
              <Grid container>
                {searchedProduct.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductItem product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Paper>
      )}
    </Container>
  );
}

export default SearchResult;
