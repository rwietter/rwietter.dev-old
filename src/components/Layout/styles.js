import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.div`
  display: flex;

	${media.lessThan('large')`
		flex-direction: column;
	`}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 7rem;
  transition: background 0.35s, color 0.35s ease;
  width: 100%;

  body#grid & {
    display: grid;
    grid-template-areas:
      "posts"
      "pagination";
  }

  ${media.lessThan("large")`
		padding: 5.8rem 0 3rem 0;
	`}
`
