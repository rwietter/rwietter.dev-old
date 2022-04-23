// import { List } from "@styled-icons/entypo/List"
import React from 'react';
import {
  AiOutlineSearch,
  AiOutlineArrowUp,
  AiFillHome,
  AiOutlineFontColors,
  AiFillAlert,
} from 'react-icons/ai';

import * as S from './styles';

const MenuBar = () => {
  const handleToTop = () => {
    const position = document.body.scrollTop || document.documentElement.scrollTop;
    let scrollAnimation;
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout(handleToTop, 30);
    } else clearTimeout(scrollAnimation);
  };

  return (
    <S.ManuBarWrapper role="navigation">
      <S.MenuBarGroup>
        <S.MenuBarLink href="/">
          <S.MenuBarItem>
            <AiFillHome size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink href="/search">
          <S.MenuBarItem>
            <AiOutlineSearch size={20} />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change Theme Pallet"
          onClick={() => {}}
        >
          <AiOutlineFontColors
            height={20}
            width={20}
          />
        </S.MenuBarItem>

        <S.MenuBarItem
          title="Dark Mode"
          onClick={() => {}}
          className="theme"
        >
          <AiFillAlert
            size={15}
            strokeWidth="0.2"
          />
        </S.MenuBarItem>
        <S.MenuBarItem title="Go top">
          <AiOutlineArrowUp onClick={handleToTop} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.ManuBarWrapper>
  );
};

export { MenuBar };
