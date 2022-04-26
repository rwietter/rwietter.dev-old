import { styled } from "@stitches/react"
import React from "react"

const Divider: React.FC = () => {
  return <DividerCSS />
}

export default Divider

const DividerCSS = styled("div", {
  border: "1px solid var(--borders)",
  WebkitTransition: "all 0.35s ease",
    transition: "all 0.35s ease",
  width: '100%',
  margin: "1rem",
})
