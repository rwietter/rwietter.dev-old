import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as CSS from './styles';

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
    <CSS.AvatarWrapper
      alt="author profile"
      title="author profile"
      fluid={avatarImage.childImageSharp.fluid}
    />
  )
}

export default Avatar
