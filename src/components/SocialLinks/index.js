import React from 'react';

import { links } from './content';
import { icons } from './icons';
import * as S from './styles';

const SocialLinks = props => (
  <S.SocialLinksWrapper data-display={props["data-flex"]}>
    <S.SocialLinksList data-display={props["data-flex"]}>
      {links?.map(({ label, url, color }) => {
        const Icon = icons[label]
        return (
          <S.SocialLinksItem key={label}>
            <S.SocialLinksLink
              href={url}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              data-hover={color}
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
