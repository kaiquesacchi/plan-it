import React from 'react';
import './Settings.sass';

import ThemeContext from '../../themes/context';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Toggle from '../../components/inputs/Toggle';

function Settings() {
  const themeControl = React.useContext(ThemeContext);

  return (
    <div id="page-Settings" className="outerBackground">
      <Header title="Settings" />
      <section id="content">
        <ul className="group innerBackground">
          <li>
            Enable Dark theme
            <Toggle
              callback={dark => themeControl.setTheme(dark ? 'dark' : 'light')}
              initial={themeControl.themeName === 'dark'}
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
