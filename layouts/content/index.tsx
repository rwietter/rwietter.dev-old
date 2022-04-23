import Header from 'components/header';
import { MenuBar } from 'components/menu-bar';
import React, { FC as withTypes, ReactNode } from 'react';
import { ContainerCSS, LayoutCSS } from './styles';

interface ContainerProps {
  children: ReactNode;
 }

const Layout: withTypes<ContainerProps> = ({ children }) => (
  <ContainerCSS>
    <Header />
    <LayoutCSS>{children}</LayoutCSS>
    <MenuBar />
  </ContainerCSS>
);

export { Layout };
