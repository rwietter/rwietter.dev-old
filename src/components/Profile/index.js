import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Avatar from '../Avatar';
import * as S from './styles';

const Profile = () => {
  let title;
  // { site: { siteMetadata: { title }}}

  title = useStaticQuery(graphql`
      query SiteData {
        site {
          siteMetadata {
            title,
            position,
            description
          }
        }
      }
    `)
  
  console.log(title.site.siteMetadata.title)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        duration={0.6}
        bg="var(--background)"
      >
        <Avatar />

        <S.ProfileInfoWrapper>
          <S.ProfileAuthor>{title.site.siteMetadata.title}</S.ProfileAuthor>
        </S.ProfileInfoWrapper>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile
