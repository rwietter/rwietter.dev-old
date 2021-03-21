import React from 'react';

import { links } from './content';
import * as S from './styles';

const MenuLinks = () => {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList role="navation">
        {links?.map(({ label, url }) => (
          <S.MenuLinksItem title={label} key={label}>
            <S.MenuLinksLink
              to={url}
              activeClassName="active"
              cover
              direction="left"
              duration={0.6}
              bg="var(--background)"
            >
              {label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
