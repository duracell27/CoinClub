import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { Header } from './header';
import { Footer } from './footer';

const Layout = ({ isHomePage, children }) => {
  return (
    <div id="wrap">
      <div id="main">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
