import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("large")`
			display: flex;
			text-align: left;
	`}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.3rem;
  margin: 1rem auto .5rem;
  font-family: var(--font-secondary);

  ${media.lessThan("large")`
		font-size: 1.2rem;
		margin: 5px 0 0 10px;
	`}
`

export const ProfileInfoWrapper = styled.div`
  display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`
