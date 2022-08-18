import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  @keyframes modalOpen {
    to {
      opacity: 1;
      transform: initial
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;

    @media (max-width: 580px) {
      place-items: end center;
    }
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--shape);
    padding: 4.8rem;
    position: relative;
    border-radius: 0.4rem;
    transform: scale(0.6);
    opacity: 0;
    animation: modalOpen 0.2s forwards;

    @media (max-width: 580px) {
      padding: 2.4rem;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 2.4rem;
    top: 2.4rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
