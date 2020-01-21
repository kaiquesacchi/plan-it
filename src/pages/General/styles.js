import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  section#content {
    box-sizing: border-box;
    min-height: calc(100vh - 80px - 60px);
  }
`;
