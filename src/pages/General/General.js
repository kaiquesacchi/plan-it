import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListFocusBlock from '../../components/focusBlocks/List';

import ProjectsService from '../../services/Projects';

import { Page } from './styles';

function General() {
  const projects = ProjectsService.list();
  return (
    <Page>
      <Header title="General" />
      <section id="content">
        <ListFocusBlock>
          <li>
            <span>Projects</span>
            <span>{projects.length}</span>
          </li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ListFocusBlock>
      </section>
      <Footer active="General" />
    </Page>
  );
}
export default General;
