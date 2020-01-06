import React from 'react';
import './Settings.sass';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Settings() {
  return (
    <div className="page-Settings">
      <Header title="Settings" />
      <Footer active="Settings" />
    </div>
  );
}
export default Settings;
