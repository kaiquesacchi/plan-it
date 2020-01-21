import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};

  section#content {
    min-height: calc(100vh - 80px - 60px);
  }
`;
