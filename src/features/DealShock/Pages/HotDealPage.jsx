import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import DealItem from '../DealItem';
import useDealHot from '../hooks/useHotDeal';

HotDealPage.propTypes = {};

function HotDealPage(props) {
  // const [dealList,setDealList]= useSta

  const history = useHistory();
  const params = {
    _page: null,
    isPromotion: true,
  };

  const { dealList, loading } = useDealHot(params);
  console.log(dealList);
  const handleItemClick = (deal) => {
    // console.log(deal);
    history.push(`/products/${deal.id}`);
  };

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
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
      </Grid>
      <Container>
        <Paper elevation={2} style={{ padding: 20 }}>
          <Grid container>
            {dealList.map((deal, index) => (
              <Grid item lg={3} md={3} sm={4} xs={12} spacing={2}>
                <DealItem
                  key={index}
                  deal={deal}
                  handleItemClick={handleItemClick}
                />
              </Grid>
              //
            ))}
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default HotDealPage;
