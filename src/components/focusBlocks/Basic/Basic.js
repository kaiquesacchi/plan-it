import React from 'react';
import styled from 'styled-components';

const FocusBlock = styled.div`
  background-color: ${props => props.theme.innerBackgroundColor};
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;

  width: 100vw;
  padding: 0 20px;
  box-sizing: border-box;

  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

function Basic({ children }) {
  return <FocusBlock>{children}</FocusBlock>;
}
export default Basic;
