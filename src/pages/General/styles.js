import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  section#content {
    box-sizing: border-box;
    min-height: calc(100vh - 80px - 60px);
    ul {
      padding: 0 5%;
      background-color: ${props => props.theme.innerBackgroundColor};
      border-radius: 20px;
      border: 1px solid ${props => props.theme.border};
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
`;
