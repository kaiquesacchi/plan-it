import React from 'react';
import './General.sass';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function General() {
  return (
    <div id="page-General">
      <Header title="General" />
      <Footer active="General" />
    </div>
  );
}
export default General;
