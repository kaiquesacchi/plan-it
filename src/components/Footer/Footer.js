import React from 'react';
import './Footer.sass';

import { useHistory } from 'react-router-dom';

function Footer({ active }) {
  const history = useHistory();

  const className = name => (name === active ? 'active' : '');
  const onClick = route => {
    if (route !== active) history.push(route);
  };

  return (
    <section id="component-Footer">
      <span className={className('General')} onClick={() => onClick('General')}>
        General
      </span>
      <span className={className('Projects')} onClick={() => onClick('Projects')}>
        Projects
      </span>
      <span className={className('Settings')} onClick={() => onClick('Settings')}>
        Settings
      </span>
    </section>
  );
}
export default Footer;
