import styled, { css } from 'styled-components';
import { CardStyleProps } from '.';

export const Container = styled.div<CardStyleProps>`
  ${({ highlightBackground }) => css`
    background: ${highlightBackground ? 'var(--green)' : 'var(--shape)'};
    padding: 1.6rem 2rem;
    border-radius: 0.25rem;
    color: ${highlightBackground ? '#fff' : 'var(--text-title)'};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  `}
`;
