import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

const bodyWidth = '36px';
const bodyHeight = '16px';
const selectorSize = '20px';

const toggleOn = keyframes`
    from {
      left: -5px;
    }
    to {
      left: ${bodyWidth} - ${selectorSize} + 5px;
    }
`;

const toggleOff = keyframes`
    from {
      left: ${bodyWidth} - ${selectorSize} + 5px;
    }
    to {
      left: -5px;
    }
`;

const Switch = styled.div`
  width: ${bodyWidth};
  height: ${bodyHeight};
  border-radius: ${bodyHeight};
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  &.on {
    background-color: #008bfd;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.div`
  width: ${selectorSize};
  height: ${selectorSize};
  border-radius: ${selectorSize};
  border-width: 1.5px;
  border-style: solid;
  background-color: white;
  position: relative;

  &.off {
    left: -5px;
    animation: ${toggleOff} 0.3s ease;
  }
  &.on {
    left: calc(${bodyWidth} - ${selectorSize} + 5px);
    animation: ${toggleOn} 0.3s ease;
    border-color: #008bfd;
  }
`;

function Toggle({ initial = false, callback = () => {} }) {
  const [value, setValue] = useState(initial ? 'on' : 'off');

  const onClick = () => {
    // Calls 'callback' as soon as possible, and then toggles its value,
    // as setValue is an async function.
    callback(value !== 'on');
    setValue(value === 'off' ? 'on' : 'off');
  };

  return (
    <Switch onClick={onClick} className={value}>
      <Slider className={value} />
    </Switch>
  );
}
export default Toggle;
