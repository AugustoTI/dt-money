import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  ${() => css`
    h2 {
      color: var(--text-title);
      font-size: 2.4rem;
      margin-bottom: 3.2rem;
    }

    input {
      display: block;
      width: 100%;
      padding: 0 2.4rem;
      height: 6.4rem;
      border-radius: 0.4rem;
      background: #e7e9ee;
      border: 1px solid #e7e9ee;
      font-size: 1.6rem;
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
        margin-top: 1.6rem;
      }
    }

    button[type='submit'] {
      display: block;
      width: 100%;
      padding: 0 2.4rem;
      height: 6.4rem;
      background-color: var(--green);
      color: #fff;
      border-radius: 0.4rem;
      border: 0;
      margin-top: 2rem;
      font-weight: 600;
      font-size: 1.6rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  margin: 1.6rem 0;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
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
    height: 6.4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.4rem;
    background: ${isActive ? colors[activeColor] : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    &:hover {
      border-color: #aaa;
    }

    img {
      width: 2rem;
      height: 2rem;
    }

    span {
      display: inline-block;
      font-size: 1.6rem;
      color: var(--text-title);
    }
  `}
`;
