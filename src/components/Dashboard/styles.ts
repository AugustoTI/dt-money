import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    box-shadow: inset 0 11.3rem var(--blue);
  `}
`;

export const Content = styled.div`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 1.6rem;
  `}
`;
