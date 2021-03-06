import { LightBulb as Light } from "@styled-icons/entypo/LightBulb"
// import { List } from "@styled-icons/entypo/List"
import React, { useEffect, useState } from "react"
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
} from "styled-icons/boxicons-regular"
import { /*Grid,*/ Home } from "styled-icons/boxicons-solid"
import { ThemePalletIcon } from "../PalletIcon"

import * as S from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState("")
  const [themeIndex, setThemeIndex] = useState(0)
  const themes = ["dark", "light", "purple"]
  // const [display, setDisplay] = useState('list')
  // const isList = display === "list"

  useEffect(() => {
    if (window) {
      setTheme(window.__theme)
      window.__onThemeChange = () => setTheme(window.__theme)
    }
  }, [])

  // useEffect(() => {
  //   if (window) {
  //     setDisplay(window.__display)
  //     window.__onDisplayChange = () => setDisplay(window.__display)
  //   }
  // }, [])

  const handleChangeThemePallet = () => {
    const themeFromalletThemes =
      themes[themeIndex] === theme ? themes[themeIndex + 1] : themes[themeIndex]
    setThemeIndex(index => (index += 1))
    window.__setPreferredTheme(themeFromalletThemes)
    if (themeIndex === 2) setThemeIndex(0)
  }

  const handleDarkMode = () => {
    const isDark = theme === "dark"
    const preferredTheme = isDark ? "light" : "dark"
    window.__setPreferredTheme(preferredTheme)
  }

  // const handleChangeDisplay = () => {
  //   const preferredDisplay = isList ? "grid" : "list"
  //   window.__setPreferredDisplay(preferredDisplay)
  // }

  const handleToTop = () => {
    const position =
      document.body.scrollTop || document.documentElement.scrollTop
    let scrollAnimation
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)))
      scrollAnimation = setTimeout(handleToTop, 30)
    } else clearTimeout(scrollAnimation)
  }

  return (
    <S.ManuBarWrapper role="navigation">
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Back to Home"
          cover
          direction="right"
          duration={0.6}
          activeClassName="active"
          bg="var(--background)"
        >
          <S.MenuBarItem>
            <Home size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          title="Search"
          cover
          direction="right"
          duration={0.6}
          activeClassName="active"
          bg="var(--background)"
        >
          <S.MenuBarItem>
            <Search size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change Theme Pallet"
          onClick={handleChangeThemePallet}
          className={['pallet', theme]}
        >
          <ThemePalletIcon height={18} width={18} />
        </S.MenuBarItem>

        <S.MenuBarItem
          title="Dark Mode"
          onClick={handleDarkMode}
          className={theme}
        >
          <Light size={15} strokeWidth="0.2" />
        </S.MenuBarItem>
        {/* <S.MenuBarItem
          title="Change Visualization"
          onClick={handleChangeDisplay}
          id={display}
          className="display"
        >
          {isList ? <List /> : <Grid />}
        </S.MenuBarItem> */}
        <S.MenuBarItem title="Go top">
          <Arrow onClick={handleToTop} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  )
}

export default MenuBar
