import styled from 'styled-components';
import media from 'styled-media-query';

const ListWapper = styled.section`
  body#grid & {
    grid-area: posts;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));

    background: var(--background);
    border-bottom: 1px solid var(--borders);
    transition: all 0.35s ease;
    padding: 10px;
    min-height: calc(100vh - 110px);

    ${media.lessThan("large")`
      grid-gap: 0.3rem;
      padding: 5px;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    `}
  }
`

export { ListWapper }
