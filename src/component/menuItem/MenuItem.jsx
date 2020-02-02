import React from 'react';

import './menuItem.styles.scss';
export const MenuItem = ({ title, picture, size }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${picture})` }}
        className={`${size} menu-item`}
      >
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
};
export default MenuItem;
