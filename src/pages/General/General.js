import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ProjectsService from '../../services/Projects';

import { Page } from './styles';

function General() {
  const projects = ProjectsService.list();
  return (
    <Page>
      <Header title="General" />
      <section id="content">
        <ul>
          <li>
            <span>Projects</span>
            <span>{projects.length}</span>
          </li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </section>
      <Footer active="General" />
    </Page>
  );
}
export default General;
