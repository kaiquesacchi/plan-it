import React from 'react';

import ThemeContext from '../../themes/context';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Toggle from '../../components/inputs/Toggle';
import Checkbox from '../../components/inputs/Checkbox';

import { Page } from './styles';

function Settings() {
  const themeControl = React.useContext(ThemeContext);

  return (
    <Page>
      <Header title="Settings" />
      <section id="content">
        <ul className="group">
          <li>
            Enable Dark theme
            <Toggle
              callback={dark => themeControl.setTheme(dark ? 'dark' : 'light')}
              initial={themeControl.themeName === 'dark'}
            />
          </li>
          <li>
            Config name
            <Checkbox />
          </li>
          <li>Config name</li>
        </ul>
        <ul className="group">
          <li>Config name</li>
          <li>Config name</li>
          <li>Config name</li>
          <li>Config name</li>
          <li>Config name</li>
        </ul>
        <ul className="group">
          <li>Config name</li>
          <li>Config name</li>
          <li>Config name</li>
          <li>Config name</li>
          <li>Config name</li>
        </ul>
      </section>
      <Footer active="Settings" />
    </Page>
  );
}
export default Settings;
