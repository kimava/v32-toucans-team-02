import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 60%;

  h1 {
    margin-bottom: 4rem;
  }
`;

export const StatsDiv = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

export const StatsList = styled.li`
  padding: 0 1rem 0.5rem 1rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #212121;
  border: 1px solid;
  border-top: none;
  border-right: none;

  h3 {
    font-weight: 400;
  }

  p {
    margin-bottom: 0.3rem;
    font-size: 2.5rem;
    font-weight: 700;
  }

  &:hover {
    color: #6d6d6d;
    border-bottom: none;
    transition: 0.5s ease-in-out;
  }
`;
