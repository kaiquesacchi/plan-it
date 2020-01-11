import React from 'react';
import light from './light';

// Default values used when no Provider is found.
export default React.createContext({
  theme: light,
  themeName: 'light',
  setTheme: () => {}
});
