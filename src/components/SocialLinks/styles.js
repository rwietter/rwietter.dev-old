import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin-top: 2rem;
  width: 100%;

	${media.lessThan('large')`
		display: none;
	`}
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column nowrap;

  list-style: none;

  > *:not(:last-child){
    margin-bottom: 1rem;
  }
`

export const SocialLinksItem = styled.li``


export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.hover || `var(--highlight)`};
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 35px;
  height: 35px;
  transform: scale(1);
  will-change: transform;
  transition: transform .4s ease;

  &:hover {
    transform: scale(1.1);
  }
`
