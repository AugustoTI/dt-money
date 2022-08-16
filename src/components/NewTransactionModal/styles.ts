import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
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
      font-size: 1rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#ddeeeb',
  red: '#efdee4',
};

export const RadioBox = styled.button<RadioBoxProps>`
  ${({ isActive, activeColor }) => css`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${isActive ? colors[activeColor] : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &:hover {
      border-color: #aaa;
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      font-size: 1rem;
      color: var(--text-title);
    }
  `}
`;
