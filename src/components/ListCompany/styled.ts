import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }

  .center {
    text-align: center;
    font-size:  1.25rem;
    font-weight: bold;
    font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  }
`;

export const ContainerHeader = styled.thead`
  background-color: #fff;
  color: rgba(76, 78, 100, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  box-shadow: rgb(76 78 100 / 22%) 0px 2px 10px 0px;
  background-image: none;
  overflow: hidden;
`;

export const ContainerHeaderRow = styled.tr`
  width: 100%;
  background-color: #fff;
  color: rgba(76, 78, 100, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  box-shadow: rgb(76 78 100 / 22%) 0px 2px 10px 0px;
  background-image: none;
  overflow: hidden;
`;

export const ContainerHeaderCell = styled.th`
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

export const Title = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1.25rem 1.25rem 1rem;
  font-size: 1.25rem;

  span {
    line-height: 1.6;
    font-weight: bold;
    font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  }
`;