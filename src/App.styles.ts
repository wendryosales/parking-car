import styled from 'styled-components';

export const Container = styled.div`
  background-color: #17181F;
  color: #797A81;
  height: 100vh;
  padding: 2rem;
  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 980px;
  margin: auto;
  padding: 10px;
  gap: .5rem;

  input, button {
    background: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    outline: 0;
    border: 0;
    width: 100%;
    font-size: 1rem;

    ::placeholder {
      color: #CCC;
    }
  }

  button {
    width: 50%;
    background: #4a5089;
    cursor: pointer;

    :hover {
      background: #393e6a;
    }
  }
`;

export const Header = styled.h1`
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`;

export const Table = styled.table`
  background-color: #20212C;
  padding: 10px;
  max-width: 980px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin: auto;
  width: 100%;

  thead {
    height: 30px;
    background-color: #797DA6;
  }

  tbody{
    background-color: #545673;
  }
`;
