import React, { useState } from 'react';

import MenuItem from '../menuItem/MenuItem';
import data from './directory.data';
import './directory.styles.scss';

const Directory = () => {
  const [items] = useState(data);
  return (
    <>
      <div className="directory-menu">
        {items.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))}
      </div>
    </>
  );
};

export default Directory;
