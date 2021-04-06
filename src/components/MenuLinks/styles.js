import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.div`
  ${media.lessThan("large")`
		display: none;
	`}
`

export const MenuLinksList = styled.nav`
  font-family: var(--font-secondary);
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  list-style: none;

  .active {
    position: relative;
    color: var(--active);
    transition: background 0.4s, color 0.4s ease;

    &::after {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      right: -9px;
      top: -7px;
      border-radius: 50%;
      background: var(--active);
      transition: background 0.4s, color 0.4s ease;
    }
    &:hover::after {
      background: var(--active);
    }
    &:hover {
      color: var(--active);
    }
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;

  transition: color 0.5s;

  &:hover {
    color: var(--active);
  }
`
