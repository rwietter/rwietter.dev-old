import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Avatar from '../Avatar';
import * as S from './styles';

const Profile = () => {

  const {
    site:
    { siteMetadata:
      { title, position, description }
    }
  } = useStaticQuery(graphql`
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
          <S.ProfileAuthor>{title}</S.ProfileAuthor>

          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileInfoWrapper>
      </S.ProfileLink>

      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
