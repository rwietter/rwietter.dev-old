import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const ManuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  background: var(--mediumBackground);

  transition: background 0.35s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
    transition: all 0.35s ease;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
		flex-direction: row;
	`}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  &.active span svg {
    color: var(--highlight);
    transition: color .35s ease;
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: color 0.35s ease;

  &:hover {
    color: var(--highlight);
    transition: color 0.35s ease;
  }

  &.dark {
    color: var(--highlight);
    transition: color 0.35s ease;
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
      transition: color 0.35s ease;
    }
  `}

  ${media.lessThan("large")`
    height: 3rem;
    padding: .9rem;
    position: relative;
    width: 3rem;
  `}
`
