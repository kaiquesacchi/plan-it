import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  section#content {
    min-height: calc(100vh - 80px);
    ul.group {
      background-color: ${props => props.theme.innerBackgroundColor};
      padding: 0 5%;
      border-radius: 15px;
      list-style-type: none;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
      li {
        padding: 10px 0;
        border-bottom: 1px solid ${props => props.theme.border};
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:last-child {
          border: none;
        }
      }
    }
  }
  footer {
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
  }
`;
