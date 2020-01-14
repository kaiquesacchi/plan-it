import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ThemeContext from '../../themes/context';

import Header from '../../components/Header';

import ProjectsService from '../../services/Projects';

import { Page } from './styles';
import { MdEdit } from 'react-icons/md';

function Project() {
  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));
  const theme = useContext(ThemeContext);
  const history = useHistory();
  return (
    <Page>
      <Header title={project.title} backButton={true}>
        <MdEdit />
      </Header>
      <section id="content">
        <ul
          className="group"
          style={{ backgroundColor: project[theme.themeName + 'Color'] }}
        >
          <li>
            <span>Light Color:</span>
            <span>{project.lightColor}</span>
          </li>
          <li>
            <span>Dark Color:</span>
            <span>{project.darkColor}</span>
          </li>
          <li>
            <span>Starting Date:</span>
            <span>{new Date(project.date).toDateString()}</span>
          </li>
          <li>
            <span>Project ID:</span>
            <span>{project.id}</span>
          </li>
        </ul>
      </section>
      <footer>
        <button
          onClick={() => {
            history.push('/projects/incomeAndExpenses/' + id);
          }}
        >
          Income and Expenses
        </button>
        <button
          onClick={() => {
            history.push('/projects/notes/' + id);
          }}
        >
          Notes
        </button>
      </footer>
    </Page>
  );
}
export default Project;
