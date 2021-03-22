import { LightBulb as Light } from '@styled-icons/entypo/LightBulb';
import { List } from '@styled-icons/entypo/List';
import React, { useEffect, useState } from 'react';
import { SearchAlt2 as Search, UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular';
import { Grid, Home } from 'styled-icons/boxicons-solid';

import * as S from './styles';

const set = new Set();

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDark = theme === "dark"
  const isList = display === "list"

  useEffect(() => {
    if (window) {
      setTheme(window.__theme)
      window.__onThemeChange = () => setTheme(window.__theme)
    }
  }, [])

	useEffect(() => {
    if (window) {
      setDisplay(window.__display)
      window.__onDisplayChange = () => setDisplay(window.__display)
    }
	}, [])
	
  const handleChangeTheme = () => {
    const preferredTheme = isDark ? "light" : "dark"
    window.__setPreferredTheme(preferredTheme)
  }

  const handleChangeDisplay = () => {
    const preferredDisplay = isList ? "grid" : "list"
    window.__setPreferredDisplay(preferredDisplay)
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
          bg="var(--background)"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          title="Search"
          cover
          direction="right"
          duration={0.6}
          bg="var(--background)"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change Theme"
          onClick={handleChangeTheme}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Change Visualization"
          onClick={handleChangeDisplay}
          id={display}
          className="display"
        >
          {isList ? <List /> : <Grid />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Go top">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  )
}

export default MenuBar
