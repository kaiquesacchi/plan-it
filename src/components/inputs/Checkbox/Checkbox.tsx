import React from 'react';

import styled from 'styled-components';

const Label = styled.label`
  input {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  #checkBorder {
    background-color: transparent;
    border: 1px solid ${props => props.theme.hardBorder};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    #checkMark {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: transparent;
    }
  }

  input:checked ~ #checkBorder {
    border: 1px solid #3e91ff;

    #checkMark {
      background-color: #3e91ff;
    }
  }
`;
function Checkbox({ callback = (checked: boolean) => {} }) {
  return (
    <Label>
      <input
        id="checkbox"
        type="checkbox"
        onChange={event => callback(event.target.checked)}
      />
      <div id="checkBorder">
        <div id="checkMark" />
      </div>
    </Label>
  );
}
export default Checkbox;
