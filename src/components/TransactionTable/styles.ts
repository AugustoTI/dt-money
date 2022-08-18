import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    margin-top: 3.2rem;
    overflow: auto;
    max-height: 30rem;

    table {
      width: 100%;
      border-spacing: 0 0.8rem;

      th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1.6rem 3.2rem;
        text-align: left;
      }

      td {
        padding: 1.6rem 3.2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.4rem;

        &:first-child {
          color: var(--text-title);
        }

        &.deposit {
          color: var(--green);
        }

        &.withdraw {
          color: var(--red);
        }
      }

      @media (max-width: 820px) {
        padding-bottom: 1rem;
        min-width: max-content;

        th,
        td {
          padding: 1.4rem 2.4rem;
          font-size: 1.4rem;
        }
      }
    }
  `}
`;
