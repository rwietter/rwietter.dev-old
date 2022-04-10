import { styled } from "../../styles/theme"

export const PeofileDescriptiom = styled(`div`, {
  display: `none`,
  padding: "0.7rem 0.6rem 0 0.6rem",
  p: {
    fontSize: `.86em`,
    lineHeight: `1.5em`,
    color: "var(--texts)",
    transition: "color 0.2s ease",
    fontFamily: "$primary",
  },

  '@large': {
    display: 'flex',
  }
})
