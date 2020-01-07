import React, { useState } from 'react';
import './Toggle.sass';

function Toggle({ initial = false, callback = () => {} }) {
  const [value, setValue] = useState(initial ? 'on' : 'off');

  const onClick = () => {
    // Calls 'callback' as soon as possible, and then toggles its value,
    // as setValue is an async function.
    callback(value !== 'on');
    setValue(value === 'off' ? 'on' : 'off');
  };

  return (
    <div id="component-Toggle" onClick={onClick}>
      <div className={'body ' + value}>
        <div className={'selector ' + value} />
      </div>
    </div>
  );
}
export default Toggle;
