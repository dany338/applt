import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(76, 78, 100, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  box-shadow: rgb(76 78 100 / 22%) 0px 2px 10px 0px;
  background-image: none;
  overflow: hidden;
  width: 50%;
`;

export const RootTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1.25rem 1.25rem 1rem;
`;

export const RootTitleContent = styled.div`
  flex: 1 1 auto;
`;

export const RootTitleText = styled.div`
  letter-spacing: 0.15px;
  font-size: 1.25rem;
  line-height: 1.6;
  font-weight: 500;
  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
`;

export const RootCardContent = styled.div`
  padding-top: 0px;
  padding: 1.25rem;
`;

export const RootCardGrid = styled.div`
  height: auto;
  border-radius: 0px;
  flex: 1 1 0%;
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.429;
  letter-spacing: 0.15px;
  outline: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 0px;
  color: rgba(76, 78, 100, 0.87);
`;

export const RootCardGridItem = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .exported {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 500;
    color: #4caf50;
    font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  }
`;