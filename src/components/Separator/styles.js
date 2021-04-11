import styled from 'styled-components';
import media from 'styled-media-query';

export const Separator = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 2rem 0 calc(2rem - 0.8rem) 0;
  background: var(--separator);
  transition: width .35s, background .35s ease;

  ${media.lessThan("large")`
		display: none;
	`}
`