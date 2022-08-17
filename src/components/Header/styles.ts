import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${() => css`
    background: var(--blue);
  `}
`;

export const Content = styled.div`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.2rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: #fff;
      background: var(--blue-light);
      font-size: 1.6rem;
      padding: 0 3.2rem;
      border: 0;
      border-radius: 0.4rem;
      height: 4.8rem;
      transition: 0.2s filter;

      &:hover {
        filter: brightness(0.9);
      }
    }

    @media (max-width: 700px) {
      img {
        height: 2.5rem;
      }

      button {
        padding: 0 1.6rem;
        font-size: 1.4rem;
        height: 3.8rem;
      }
    }
  `}
`;
