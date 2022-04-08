import Img from "gatsby-image"
import { styled } from "../../styles/theme"

export const AvatarWrapper = styled(Img, {
  borderRadius: "50%",
  height: "1.875rem",
  width: "1.875rem",
  margin: "auto",
  fontFamily: "$secondary",

  "@large": {
    height: "3rem",
    width: "3rem",
  },
})
