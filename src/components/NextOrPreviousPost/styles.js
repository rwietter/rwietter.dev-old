import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  transition: all 0.35s ease;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--postColor);
  display: flex;
  padding: 1.8rem;
  text-decoration: none;
  transition: all 0.35s ease;
  width: 50%;
  &:hover {
    background: var(--background);
  }
  &.previous {
    transition: all 0.35s ease;
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
`
