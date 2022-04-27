import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Tr = styled.tr`
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
`;