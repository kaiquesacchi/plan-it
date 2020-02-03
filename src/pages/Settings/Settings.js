import React from 'react';

import ThemeContext from '../../themes/context';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListFocusBlock from '../../components/focusBlocks/List';

import Toggle from '../../components/inputs/Toggle';

import { Page } from './styles';

function Settings() {
  const themeControl = React.useContext(ThemeContext);

  return (
    <Page>
      <Header title="Settings" />
      <section id="content">
        <ListFocusBlock>
          <li>
            Enable Dark theme
            <Toggle
              callback={dark => themeControl.setTheme(dark ? 'dark' : 'light')}
              initial={themeControl.themeName === 'dark'}
            />
          </li>
        </ListFocusBlock>
      </section>
      <Footer active="Settings" />
    </Page>
  );
}
export default Settings;
