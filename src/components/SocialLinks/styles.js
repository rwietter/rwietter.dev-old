import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const animate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

export const SocialLinksWrapper = styled.nav`
  margin-top: 2rem;
  align-self: flex-start;
  width: 100%;

	${media.lessThan('large')`
		display: none;
	`}
`

export const SocialLinksList = styled.ul`
  display: ${props => (props["data-display"] === "flex" ? "flex" : "grid")};
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  li {
    padding: 1rem 0.5rem;
  }
`

export const SocialLinksItem = styled.li``


export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${props => props["data-hover"] || `var(--highlight)`};
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
  height: 20px;

  &:hover {
    animation: ${animate} .5s backwards;
  }
`
