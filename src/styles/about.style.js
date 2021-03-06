import styled from 'styled-components';
import media from 'styled-media-query'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 9rem);
  margin: 0 auto;
  width: 100%;
  max-width: 70rem;
  padding-left: 7rem;
  position: relative;
  overflow-x: hidden;

  ${media.lessThan('large')`
    padding-left: 0;
  `}

  &::before {
    position: absolute;
    content: "─ ABOUT ─";
    color: var(--frosted);
    opacity: 0.4;
    font-family: var(--font-secondary);
    font-weight: 900;
    font-size: clamp(40px, 10vw, 10rem);
    transition: color 0.35s ease;
  }
`

const Author = styled.section`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 0 2rem;
`

const Title = styled.h1`
  font-family: var(--font-secondary);
  font-weight: 800;
  font-size: clamp(22px, 4vw, 3.2rem);
  color: var(--texts);

  transition: color .35s ease;
`
const Point = styled.span`
  color: var(--highlight);
  margin-left: 5px;
  transition: color 0.35s ease;
`

const Username = styled.p`
  color: var(--texts);
  align-self: flex-start;
  font-size: clamp(13px, 1.7vw, 1.3rem);
  padding-top: 1rem;
  transition: color 0.35s ease;
`

const Position = styled.p`
  color: var(--texts);
  font-size: clamp(18px, 3vw, 2rem);
  align-self: flex-start;
  padding-top: 1rem;
  transition: color 0.35s ease;
`

const Area = styled.div`
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;

  .circles {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: var(--circles_animation);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`

export const Page = {
  base: {},
  layout: {
    Container,
    Author,
    Area,
  },
  with: {
    Title,
    Point,
    Username,
    Position,
  },
}