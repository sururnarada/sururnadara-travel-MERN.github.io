import React from 'react';
import Routers from '../../router/Routers';
import Footer from './../footer/Footer';
import Header from './../header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
