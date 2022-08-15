import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${() => css`
    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      display: block;
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      background: #e7e9ee;
      border: 1px solid #e7e9ee;
      font-size: 1rem;
      font-weight: 400;
      transition: background 0.2s;

      &:hover,
      &:focus {
        background: #fcfdff;
      }

      &::placeholder {
        color: var(--text-title);
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type='submit'] {
      display: block;
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background-color: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      margin-top: 1.25rem;
      font-weight: 600;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
