import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.border};
  &:focus {
    outline: none;
    border-bottom: 2px solid ${props => props.theme.colorActive};
  }
`;

function Text(props: object) {
  return <Input {...props} />;
}
export default Text;
