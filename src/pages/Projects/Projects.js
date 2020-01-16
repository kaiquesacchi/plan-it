import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AiOutlineDelete } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectsService from '../../services/Projects';

import { Page, ProjectCard, DeleteButtons } from './styles';

function Projects() {
  const [projects, setProjects] = useState(ProjectsService.list());
  const history = useHistory();
  const theme = localStorage.getItem('theme') || 'light';

  // Remove Projects ___________________________________________________
  const [removing, setRemoving] = useState(false);
  const [removingList, setRemovingList] = useState([]);
  const toggleRemoving = () => {
    setRemoving(!removing);
    setRemovingList([]);
  };
  const toggleRemoveProject = id => {
    const index = removingList.indexOf(id);
    if (index === -1) setRemovingList([...removingList, id]);
    else {
      let newArray = [...removingList];
      newArray.splice(index, 1);
      setRemovingList(newArray);
    }
  };
  const remove = () => {
    setProjects(ProjectsService.remove(removingList));
    toggleRemoving();
  };

  // Render ____________________________________________________________
  const headerButtons = () => {
    if (removing) return '';
    return (
      <React.Fragment>
        <GoPlus onClick={() => history.push('/projects/new')} />
        <AiOutlineDelete onClick={toggleRemoving} />
      </React.Fragment>
    );
  };
  const footer = () => {
    return removing ? (
      <React.Fragment>
        <div style={{ height: '60px' }} />
        <DeleteButtons>
          <button onClick={toggleRemoving}>Cancel</button>
          <button onClick={remove}>Remove</button>
        </DeleteButtons>
      </React.Fragment>
    ) : (
      <Footer active="Projects" />
    );
  };

  return (
    <Page>
      <Header title="My Projects">{headerButtons()}</Header>
      <section id="content">
        {projects.map(project => (
          <ProjectCard key={project.id} forHtml={`delete-checkbox-${project.id}`}>
            {removing ? (
              <input
                id={`delete-checkbox-${project.id}`}
                type="checkbox"
                onClick={event => toggleRemoveProject(project.id)}
              />
            ) : (
              ''
            )}
            <Card
              title={project.title}
              backgroundColor={project[theme + 'Color']}
              onClick={() =>
                removing ? {} : history.push('/projects/info/' + project.id)}
            />
          </ProjectCard>
        ))}
      </section>
      {footer()}
    </Page>
  );
}
export default Projects;
