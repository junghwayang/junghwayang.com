import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../hooks/use-site-metadata';

const Head = ({ pageTitle }) => {
  const { title } = useSiteMetadata();

  return (
    <Helmet title={`${pageTitle} | ${title}`} />
  );
}

export default Head;