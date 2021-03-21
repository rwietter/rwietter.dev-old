import media from 'styled-media-query';

const { default: styled } = require("styled-components")

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
		height: auto;
		width: 100%;
		flex-direction: row;
		padding: 1.5rem;
		justify-content: space-between;
	`}
`
