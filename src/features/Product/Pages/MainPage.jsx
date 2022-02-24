import { Box, Container } from '@material-ui/core';
import categoriesApi from 'api/categoryApi';
import Banner from 'components/Banner';
import Category from 'components/Category';
import React, { useEffect, useState } from 'react';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <React.Fragment>
      <Category />
      <Container>
        <Banner />
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
