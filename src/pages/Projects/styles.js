import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  overflow-x: hidden;

  section#content {
    box-sizing: border-box;
    min-height: calc(100vh - 80px - 60px);
    padding: 5%;
  }
`;

export const ProjectCard = styled.label`
  display: flex;
  width: 110vw;
  align-items: center;
  margin-bottom: 10px;
  input {
    margin-right: 5%;
  }
`;

export const DeleteButtons = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60px;
  button {
    background-color: inherit;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colorActive};
  }
`;
