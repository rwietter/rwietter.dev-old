/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import React from 'react';

import GlobalStyles from '../../styles/global';
import MenuBar from '../MenuBar';
import Sidebar from '../Sidebar/';
import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain role="main content" aria-controls="main">
        {children}
      </S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
