import React from 'react';
import './Settings.sass';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Toggle from '../../components/inputs/Toggle';

function Settings() {
  return (
    <div id="page-Settings">
      <Header title="Settings" />
      <section id="content">
        <ul className="group">
          <li>
            Config name
            <Toggle />
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
