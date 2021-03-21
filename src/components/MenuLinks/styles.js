import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.div`
  ${media.lessThan("large")`
		display: none;
	`}
`

export const MenuLinksList = styled.nav`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  list-style: none;

  .active {
    color: var(--postColor);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;

  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
