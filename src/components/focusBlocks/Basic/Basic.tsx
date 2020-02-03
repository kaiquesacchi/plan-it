import React, { ReactChildren, FunctionComponent } from 'react';
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

interface Props {
  selecting?: boolean;
  callback?: any;
  children?: any;
}

function Basic({
  selecting = false,
  callback = (checked: boolean) => {},
  children
}: Props) {
  return (
    <FocusBlock>
      {selecting ? <Checkbox callback={callback} /> : ''}
      {children}
    </FocusBlock>
  );
}
export default Basic;
