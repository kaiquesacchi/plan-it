import React from 'react';
import { useHistory } from 'react-router-dom';
import './Projects.sass';

import { FaPlus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ProjectsService from '../../services/Projects';

function Projects() {
  const history = useHistory();

  const theme = localStorage.getItem('theme') || 'light';
  const projects = ProjectsService.list();

  return (
    <div id="page-Projects" className="outerBackground">
      <Header title="My Projects">
        <FaPlus onClick={() => history.push('/projects/new')} />
        <AiOutlineDelete />
      </Header>
      <section id="content">
        {projects.map(project => (
          <Card
            key={project.id}
            id={project.id}
            title={project.name}
            backgroundColor={project[theme + 'Color']}
          />
        ))}
      </section>
      <Footer active="Projects" />
    </div>
  );
}
export default Projects;
