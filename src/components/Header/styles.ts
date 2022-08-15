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
    padding: 2rem 1rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: #fff;
      background: var(--blue-light);
      font-size: 1rem;
      padding: 0 2rem;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      transition: 0.2s filter;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
