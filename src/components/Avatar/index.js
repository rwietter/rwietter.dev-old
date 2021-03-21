import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as S from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.AvatarWrapper
      alt="profile"
      title="profile"
      fluid={avatarImage.childImageSharp.fluid}
    />
  )
}

export default Avatar
