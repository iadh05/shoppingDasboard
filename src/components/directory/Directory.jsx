import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menuItem/MenuItem';

import { selectDirectorySession } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ items }) => {
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
const mapStateToProps = createStructuredSelector({
  items: selectDirectorySession
});
export default connect(mapStateToProps)(Directory);
