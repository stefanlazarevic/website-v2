import React from 'react';

// eslint-disable-next-line
const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <h1 component="h4">Oops, nothing here</h1>;
};

export default NotFound;
