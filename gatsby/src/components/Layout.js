import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Content from './ContentStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Content>
        <Nav />
        {children}
        <Footer />
      </Content>
    </>
  );
}
