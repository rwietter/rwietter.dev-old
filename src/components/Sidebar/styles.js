import media from 'styled-media-query';

const { default: styled } = require("styled-components")

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 1rem .5rem;
  text-align: center;
  width: 7rem;
  transition: background 0.35s;

  ${media.lessThan("large")`
		height: auto;
		width: 100%;
		flex-direction: row;
		padding: 1.5rem;
		justify-content: space-between;
	`}
`
