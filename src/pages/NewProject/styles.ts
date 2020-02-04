import styled from 'styled-components';

export const Page = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  section#content {
    min-height: calc(100vh - 80px - 60px);
    position: relative;
    top: 5%;

    .group {
      box-sizing: border-box;
      border-radius: 20px;
      padding: 5%;
      background-color: ${props => props.theme.innerBackgroundColor};
      margin-bottom: 10%;
      &:last-child {
        margin: 0;
      }

      .text-input {
        color: inherit;
        font-size: 1rem;
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  section#buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    background-color: inherit;
    button {
      background-color: inherit;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: ${props => props.theme.colorActive};
    }
  }
`;
