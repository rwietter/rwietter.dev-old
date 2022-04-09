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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

	${media.lessThan('large')`
		display: none;
	`}
`

export const SocialLinksList = styled.ul`
  display: ${props => (props["data-display"] === "flex" ? "flex" : "grid")};
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 1rem;
  margin-top: ${props => (props["data-display"] === "flex" ? "1rem" : "0")}
`

export const SocialLinksItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`


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
