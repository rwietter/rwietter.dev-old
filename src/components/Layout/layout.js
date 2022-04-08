import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import React from 'react';

import GlobalStyles from '../../styles/global';
import MenuBar from '../MenuBar';
import Sidebar from '../Sidebar/';
import * as S from './styles';
import './styles.css';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>
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
