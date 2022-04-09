import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import media from "styled-media-query"

export const MenuLinksWrapper = styled.div`
font-family: var(--font-secondary);
  ${media.lessThan("large")`
		display: none;
	`}
`

export const MenuLinksList = styled.nav`
  font-family: var(--font-secondary);
  font-size: 1.2rem;
  font-weight: 500;
`

export const MenuLinksItem = styled.li`
  padding: 0.8rem 0;
  list-style: none;
  font-family: var(--font-secondary);

  .active {
    position: relative;
    color: var(--active);
    transition: background 0.4s, color 0.4s ease;
    font-weight: 400;

    &::after {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      right: -9px;
      top: -3px;
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
  a {
    font-family: var(--font-secondary);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  font-family: var(--font-secondary);

  &:hover {
    color: var(--active);
  }
`
