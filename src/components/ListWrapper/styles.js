import styled from 'styled-components';

const ListWapper = styled.section`
  body#grid & {
    grid-area: posts;
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));

    background: var(--background);
    border-bottom: 1px solid var(--borders);
    transition: background .35s, border .35s ease;
    padding: 10px;
    min-height: calc(100vh - 110px);
  }
`

export { ListWapper }
