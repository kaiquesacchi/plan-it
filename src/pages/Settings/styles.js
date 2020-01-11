import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};

  section#content {
    width: 90vw;
    margin-left: 5vw;
    min-height: calc(100vh - 80px - 60px);

    ul.group {
      background-color: ${props => props.theme.innerBackgroundColor};
      padding: 0 5%;
      border-radius: 15px;
      list-style-type: none;
      border: 1px solid ${props => props.theme.border};

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
