import React from 'react';
import styled from 'styled-components';

import Checkbox from '../../inputs/Checkbox';

const FocusBlock = styled.label`
  background-color: ${props => props.theme.innerBackgroundColor};
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;

  width: 100vw;
  padding: 0 20px;
  box-sizing: border-box;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  position: relative;
`;

function Basic({ selecting = true, callback = () => {}, children }) {
  return (
    <FocusBlock>
      {selecting ? <Checkbox callback={callback} /> : ''}
      {children}
    </FocusBlock>
  );
}
export default Basic;
