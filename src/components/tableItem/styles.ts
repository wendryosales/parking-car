import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Tr = styled.tr`
  height: 30px;
  margin-bottom: 2px;
  text-align :center;

  :hover {
    background: #797DA6;
  }

  img {
    cursor: pointer;
    height: 30px;
  }
`;