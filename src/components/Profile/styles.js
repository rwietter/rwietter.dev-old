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
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
		font-size: 1.2rem;
		margin: 0 0 0 10px;
	`}
`

export const ProfilePosition = styled.p`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
		font-size: 0.8rem;
		margin: 0.4rem 0 0 10px;
	`}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
		display: none;
	`}
`

export const ProfileInfoWrapper = styled.div`
  display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`
