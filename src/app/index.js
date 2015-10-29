import generators from 'yeoman-generator';
import initializing from './initializing';
import prompting from './prompting';
import configuring from './configuring';
import writing from './writing';
import install from './install';
import end from './end';

module.exports = generators.Base.extend({
  initializing: initializing,
  prompting: prompting,
  configuring: configuring,
  writing: writing,
  install: install,
  end: end,
});

// Skeleton structure for an isomorphic JS app using React, Redux, and other packages preferred by RentPath.
