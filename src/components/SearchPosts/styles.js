import styled from 'styled-components';
import media from 'styled-media-query';

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.35s, background 0.35s ease;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;

    ${media.lessThan("large")`
      padding: 1rem;
    `}
  }
  .ais-SearchBox {
    padding-top: 3rem;
  }
  .ais-Stats {
    transition: color 0.35s ease;
    color: var(--texts);
  }
  .ais-SearchBox .ais-SearchBox-form .ais-SearchBox-input {
    background: var(--mediumBackground);
    transition: background 0.35s, border 0s ease;
    font-size: clamp(0.997rem, calc(12px + 1.05vw), 1.313rem);
    line-height: 1.1;
    padding: 1.5rem;
    &:focus {
      border: none;
    }
  }

  body#grid & {
    .ais-Hits-list {
      display: grid;
      grid-area: posts;
      gap: 0.5rem;
      grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
      margin-top: 2rem;
      padding: 1rem 3.5rem;
      background: var(--background);
      transition: background 0.35s ease;
      min-height: calc(100vh - 3.1rem);

      ${media.lessThan("large")`
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        padding: 1rem;
      `}
    }
    .ais-Hits-item {
      transition: background 0.35s ease;
      background: var(--background);
    }
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    transition: border 0s, color 0.35s ease;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
