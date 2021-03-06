import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
  display: flex;
  text-decoration: none;
  background: var(--background);
  color: var(--inverse);
  font-family: var(--font-secondary);
  border-bottom: 2px solid var(--mediumBackground);
  transition: all 0.35s ease;

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
      background: var(--highlight);
      color: #fff;
    }
  }
`
export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 2rem 10rem;

  body#grid & {
    border-bottom: 0;
  }

  ${media.lessThan("large")`
      padding: 2rem 0;
  `}
`

export const PostItemTag = styled.p`
  display: none;
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
  background: url(${props => props['data-background']}) no-repeat center center;
  background-size: 100% 100%;
  object-fit: cover;
  transition: color 0.35s, background 0.35s ease;

  @media (min-width: 650px) {
    display: flex;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-primary);
  padding: 0 1.2rem;

  @media (min-width: 650px){
    margin-left: 1rem;
    padding: 0 0.5rem;
  }
	
  body#grid & {
    padding-top: 2rem;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  line-height: 1.15;
  font-family: var(--font-primary);
`

export const PostItemTitle = styled.h2`
  font-weight: 700;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-family: var(--font-primary);

  margin: .7rem 0 0.5rem;

	body#grid & {
		line-height: 1.1;
		margin: 0.8rem 0;
	}
`

export const PostItemDescription = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
  font-family: var(--font-primary);
  line-height: 1.2;
`
