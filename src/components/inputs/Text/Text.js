import React, { useState } from 'react';
import './Text.sass';

function Text(props) {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <div id="component-Text">
      <input
        {...props}
        className={props.className + (onFocus ? ' active' : '')}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </div>
  );
}
export default Text;
