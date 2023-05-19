import React from 'react';
import Header from '../ui/partials/Header/Header';

const Layout = ({ component }) => {
  return (
    <>
    <Header/>
      <main>{component}</main>
    </>
  );
};

export default Layout;
