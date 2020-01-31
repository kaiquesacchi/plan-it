import styled from 'styled-components';

export const Page = styled.section`
  background-color: ${props => props.theme.outerBackgroundColor};
  color: ${props => props.theme.color};
  section#content {
    min-height: calc(100vh - 80px);
  }
`;

export const BlockContent = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
