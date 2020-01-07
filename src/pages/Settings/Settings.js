import React from 'react';
import './Settings.sass';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Toggle from '../../components/inputs/Toggle';

function Settings() {
  const updateTheme = darkTheme => {
    const theme = darkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.getElementById('theme-css').href = 'theme-' + theme + '.css';
  };

  return (
    <div id="page-Settings" className="outerBackground">
      <Header title="Settings" />
      <section id="content">
        <ul className="group innerBackground">
          <li>
            Enable Dark theme
            <Toggle
              callback={updateTheme}
              initial={localStorage.getItem('theme') === 'dark'}
            />
          </li>
          <li>Config name</li>
          <li>Config name</li>
        </ul>
      </section>
      <Footer active="Settings" />
    </div>
  );
}
export default Settings;
