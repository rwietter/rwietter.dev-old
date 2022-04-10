import { styled } from "../../styles/theme"
import { Link } from "gatsby"
import React from "react"

const ArrowRightComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-narrow-left"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="inherint"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="5" y1="12" x2="9" y2="16" />
    <line x1="5" y1="12" x2="9" y2="8" />
  </svg>
)

export const GoBackCSS = styled(Link, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingBottom: "1.2rem",

  paddingLeft: "0.5rem",
  fontSize: "1.1rem",
  textDecoration: "none",
  fontWeight: 400,
  color: "#FB377F",
  transition: "all .4s ease",

  "&:hover": {
    color: "#FF6FA4",

    svg: {
      transform: "translateX(-5px)",
      stroke: "#FF6FA4",
    }
  },

  svg: {
    marginLeft: "0.6rem",
    stroke: "#FB377F",
    display: "block",
    transition: "all .4s ease",
    willChange: "transform",
  },
})

export const ArrowRightCSS = styled(ArrowRightComponent, {})
