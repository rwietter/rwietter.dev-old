import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 3rem;
  transition: all .35s ease;
  background: var(--mediumBackground);
  color: var(--texts);
  border-top: 1px solid var(--borders);

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    color: var(--texts);

    svg {
      transition: stroke 0.4s, transform 0.4s, stroke-width 1.5s ease;
    }

    svg:hover {
      transform: scale(1.1);
      stroke-width: 1.7;
      stroke: var(--postColor);
    }
  }
	
  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}
`

export { Container }
