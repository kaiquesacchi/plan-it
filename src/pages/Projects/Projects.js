import React from 'react';
import './Projects.sass';

import { FaPlus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Projects() {
  return (
    <div className="page-Projects">
      <Header title="My Projects">
        <FaPlus />
        <AiOutlineDelete />
      </Header>
      <div style={{ height: '200vh' }}>Content</div>
      <Footer />
    </div>
  );
}
export default Projects;
