import { TransitionPortal } from "gatsby-plugin-transition-link"
import PropTypes from "prop-types"
import React from "react"
import loadable from "@loadable/component"

import GlobalStyles from "../../styles/global"
import * as S from "./styles"
import "./styles.css"

const MenuBar = loadable(() => import("../MenuBar"), {
  fallback: <div>Loading...</div>,
})

const Sidebar = loadable(() => import("../Sidebar/"), {
  fallback: <div>Loading...</div>,
})

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
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
