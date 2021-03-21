import styled from 'styled-components';

const ListWapper = styled.section`
  body#grid & {
    display: grid;
    grid-area: posts;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));

    background: var(--background);
    border-bottom: 1px solid var(--borders);
    padding: 20px 1rem;
  }
`

export { ListWapper }
