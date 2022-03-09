import Img from "gatsby-image"
import { styled } from "../../styles/theme"

export const AvatarWrapper = styled(Img, {
  borderRadius: "50%",
  height: "3.75rem",
  margin: "auto",
  width: "3.75rem",
  fontFamily: "$secondary",

  '@large': {
    height: "1.875rem",
    width: "1.875rem",
  },
})
