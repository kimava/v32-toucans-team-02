import styled from 'styled-components';

export const SettingsDiv = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 0.8rem;
  }

  button {
    font-size: 1rem;
    text-decoration: underline;
    color: #888888;
    border: none;
    outline: none;
    background-color: inherit;

    &:hover {
      color: black;
      transition: 0.3s ease-in-out;
    }
  }
`;
