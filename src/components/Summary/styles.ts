import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: -11.4rem;
  `}
`;
