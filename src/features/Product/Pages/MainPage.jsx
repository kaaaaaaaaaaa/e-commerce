import { Container } from '@material-ui/core';
import Banner from 'components/Banner';
import Category from 'components/Category';
import FeaturedCategory from 'components/FeaturedCategory';
import DealShock from 'features/DealShock';
import React from 'react';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <React.Fragment>
      <Category />
      <Container>
        <Banner />
        <DealShock />
        <FeaturedCategory />
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
