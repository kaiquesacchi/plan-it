import React from 'react';
import styled from 'styled-components';

import BasicFocusBlock from '../Basic';

const ListStyle = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
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
`;

interface Props {
  children?: any;
}

function List({ children }: Props) {
  return (
    <BasicFocusBlock>
      <ListStyle>{children}</ListStyle>
    </BasicFocusBlock>
  );
}
export default List;
