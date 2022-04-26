import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { styled } from "../../styles/theme"

// import { Container } from './styles';

const LikePost: React.FC = (props) => {
  const [likes, setLikes] = useState(0)

  console.log(props)
  return (
    <Wrapper>
      <button onClick={() => setLikes(state => state + 1)}>
        Like {likes ?? 0}
      </button>
    </Wrapper>
  )
}

export default LikePost

const Wrapper = styled("div", {
  paddingLeft: "3rem",

  button: {
    color: "$white",
    background: "none",
    outline: "none",
    border: "none",
    fontSize: "$3",
  },
})
