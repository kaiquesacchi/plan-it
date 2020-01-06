import React from 'react';
import './Projects.sass';

import { FaPlus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Projects() {
  return (
    <div id="page-Projects">
      <Header title="My Projects">
        <FaPlus />
        <AiOutlineDelete />
      </Header>
      <section className="content">
        <Card title="Project 1" backgroundColor="#85CBCC" />
        <Card title="Project 2" backgroundColor="#A8DEE0" />
        <Card title="Project 3" backgroundColor="#F9E2AE" />
        <Card title="Project 4" backgroundColor="#FBC78D" />
      </section>
      <Footer active="Projects" />
    </div>
  );
}
export default Projects;
