import React, { Fragment } from 'react';

import Directory from '../../component/directory/Directory';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <Directory />
      </div>
    </Fragment>
  );
};

export default HomePage;
