import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

export const PostItemLink = styled(AniLink)`
  display: flex;
  text-decoration: none;
  background: var(--mediumBackground);

  color: var(--texts);
  &:hover {
    color: var(--highlight);
  }

  body#grid & {
    border-radius: 20px;
    background: var(--mediumBackground) no-repeat center center;
    background-size: cover;
    object-fit: cover;
  }
`
export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 2rem 3rem;

  border-bottom: 1px solid var(--borders);

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const PostItemTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: auto;
  max-height: 30px;
  min-width: auto;
  min-width: 50px;
  padding: 8px;
  margin-left: 1.5rem;
  border-radius: 2px;

  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  color: var(--postColor);
  background: ${props =>
    props.background ? props.background : "var(--postColor)"};
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
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;

  margin: 0.2rem 0 0.5rem;

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
