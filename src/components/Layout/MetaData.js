import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title,metaKeyword,metaDesription }) => {
   
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={metaKeyword} />
        <meta name="description" content={metaDesription} />
    </Helmet>
  );
};

export default MetaData;