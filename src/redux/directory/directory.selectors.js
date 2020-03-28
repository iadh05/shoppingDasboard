import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySession = createSelector(
  [selectDirectory],
  directory => directory.sections
);
