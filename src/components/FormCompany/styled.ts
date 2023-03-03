import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(76, 78, 100, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  box-shadow: rgb(76 78 100 / 22%) 0px 2px 10px 0px;
  background-image: none;
  overflow: hidden;
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

export const RootCardContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin-top: -1.5rem;
  width: calc(100% + 1.5rem);
  margin-left: -1.5rem;

  form {
    width: 100%;
  }
`;

export const RootCardContentContainerItem = styled.div`
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  flex-basis: 33.3333%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 33.3333%;
  box-sizing: border-box;
  margin: 0px;
`;