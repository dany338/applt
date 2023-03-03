import styled from 'styled-components';

export interface ITrProps {
  index: number;
}

export const Container = styled.tr<ITrProps>`
  width: 100%;
  background-color: ${(props) => (props.index % 2 === 0 ? '#fff' : '#f5f5f5')};

  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

export const ContainerCell = styled.td`
  width: 25%;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid rgb(233, 233, 236);
  text-align: center;
  padding: 1.25rem 1.25rem 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
`;