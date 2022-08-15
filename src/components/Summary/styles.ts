import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -4.68rem;
  `}
`;
