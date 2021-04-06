import styled from 'styled-components';
import media from 'styled-media-query';

export const Separator = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 2rem;
  background: var(--separator);

  ${media.lessThan("large")`
		display: none;
	`}
`