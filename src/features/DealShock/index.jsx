import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DealList from './DealList';
import { Box, Paper } from '@material-ui/core';
import productApi from 'api/productApi';

DealShock.propTypes = {};

function DealShock(props) {
  const [dealShock, setDealShock] = useState([]);

  const params = {
    _page: null,
    _limit: 12,
    isPromotion: true,
  };

  useEffect(() => {
    (async () => {
      const { data } = await productApi.getAll(params);
      console.log({ data });
      setDealShock(data);
    })();
    //
    return () => {};
  }, []);

  return (
    <Box>
      <Paper>
        <Box className="deal-today">
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
        </Box>
        <DealList dealShock={dealShock} />
      </Paper>
    </Box>
  );
}

export default DealShock;
