import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DealList from './DealList';
import { Box, Paper, Grid } from '@material-ui/core';
import productApi from 'api/productApi';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

DealShock.propTypes = {};

function DealShock(props) {
  const [dealShock, setDealShock] = useState([]);
  const history = useHistory();

  const params = {
    _page: null,
    _limit: 12,
    isPromotion: true,
  };

  useEffect(() => {
    (async () => {
      const { data } = await productApi.getAll(params);
      // console.log({ data });
      setDealShock(data);
    })();
    //
    return () => {};
  }, []);

  const handleViewDeal = () => {
    history.push('/deal');
  };
  return (
    <Box>
      <Paper>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className="deal-today"
        >
          <Grid item>
            <img
              style={{ height: 28 }}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
              alt=""
            />
            <img
              style={{ width: 21 }}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
              alt=""
            />
            <img
              style={{ height: 28 }}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
              alt=""
            />
          </Grid>
          <Grid item>
            <IconButton onClick={handleViewDeal}>
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        </Grid>
        <DealList dealShock={dealShock} />
      </Paper>
    </Box>
  );
}

export default DealShock;
