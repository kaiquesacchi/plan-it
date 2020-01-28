import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  section#content {
    min-height: calc(100vh - 80px - 60px);
  }
  footer {
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

export const TextArea = styled.textarea`
  color: ${props => props.theme.color};
  width: 100%;
  min-height: 300px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  padding: 20px 0;
`;

export const UnclickableText = styled.p`
  color: ${props => props.theme.color};
  width: 100%;
  min-height: 300px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  padding: 20px 0;
`;
