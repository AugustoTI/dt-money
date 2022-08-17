import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    overflow-x: auto;
    gap: 3.2rem;

    @media (max-width: 900px) {
      gap: 2rem;
      padding-bottom: 1rem;
    }
  `}
`;
