import styled, { css } from 'styled-components';
import { CardStyleProps } from '.';

export const Container = styled.div<CardStyleProps>`
  ${({ highlightBackground }) => css`
    background: ${highlightBackground ? 'var(--green)' : 'var(--shape)'};
    padding: 2.5rem 3.2rem;
    border-radius: 0.4rem;
    color: ${highlightBackground ? '#fff' : 'var(--text-title)'};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1.6rem;
      font-size: 3.2rem;
      font-weight: 500;
    }
  `}
`;
