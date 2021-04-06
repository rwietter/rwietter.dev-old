import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

export const PostItemLink = styled(AniLink)`
  display: flex;
  text-decoration: none;
  background: var(--background);
  color: var(--inverse);
  transition: all 0.35s ease;
  font-family: var(--font-secondary);
  border-bottom: 2px solid var(--mediumBackground);

  &:hover {
    color: var(--highlight);
    background: var(--mediumBackground);
  }

  body#grid & {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    color: var(--texts);
    background-color: var(--mediumBackground);

    &:hover {
      background: url(${props => props.background}) no-repeat center center;
      background-size: cover;
      object-fit: cover;
    }
  }
`
export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 2rem 1rem;

  body#grid & {
    border-bottom: 0;
  }
`

export const PostItemTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  width: 4.8rem;
  border-radius: 50%;
  padding: 8px;
  margin-left: 1.5rem;

  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  color: var(--postColor);
  background: url(${props => props.background}) no-repeat center center;
  background-size: 100% 100%;
  object-fit: cover;
  transition: color 0.35s, background 0.35s ease;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.5rem;
	
  body#grid & {
    padding-top: 2rem;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  line-height: 1.15;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;

  margin: .7rem 0 0.5rem;

	body#grid & {
		line-height: 1.1;
		margin: 0.8rem 0;
	}
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
