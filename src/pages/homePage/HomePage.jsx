import React, { Fragment } from 'react';

import { HomePageContainer } from './HomePage.style';
import Directory from '../../components/directory/Directory';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <Fragment>
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    </Fragment>
  );
};

export default HomePage;
