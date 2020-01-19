import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ThemeContext from '../../themes/context';

import Header from '../../components/Header';

import ProjectsService from '../../services/Projects';

import { Page } from './styles';
import { MdEdit } from 'react-icons/md';

import TextInput from '../../components/inputs/Text';

function Project() {
  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));
  const theme = useContext(ThemeContext);
  const history = useHistory();

  const [editing, setEditing] = useState(false);
  const [editingFields, setEditingFields] = useState({});

  const edit = () => {
    let newValues = { ...editingFields };
    Object.keys(newValues).forEach(
      value => newValues[value] === '' && delete newValues[value]
    );
    ProjectsService.update(id, newValues);
  };

  const inputChange = event => {
    setEditingFields({
      ...editingFields,
      [event.target.name]: event.target.value
    });
  };

  const details = () => {
    if (editing)
      return (
        <ul>
          {[
            ['title', 'Title'],
            ['lightColor', 'Light Color'],
            ['darkColor', 'Dark Color']
          ].map(attribute => {
            return (
              <li key={attribute[0]}>
                <TextInput
                  placeholder={`${attribute[1]} (${project[attribute[0]]})`}
                  name={attribute[0]}
                  onChange={inputChange}
                />
              </li>
            );
          })}
        </ul>
      );

    return (
      <ul
        className="group"
        style={{ backgroundColor: project[theme.themeName + 'Color'] }}
      >
        <li>
          <span>Starting Date:</span>
          <span>{new Date(project.date).toDateString()}</span>
        </li>
        <li>
          <span>Light Color:</span>
          <span>{project.lightColor}</span>
        </li>
        <li>
          <span>Dark Color:</span>
          <span>{project.darkColor}</span>
        </li>
        <li>
          <span>Project ID:</span>
          <span>{project.id}</span>
        </li>
      </ul>
    );
  };

  const buttons = () => {
    if (editing)
      return (
        <footer>
          <button onClick={() => setEditing(false)}>Cancel</button>
          <button
            onClick={() => {
              setEditing(false);
              edit();
            }}
          >
            Save
          </button>
        </footer>
      );

    return (
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
    );
  };
  return (
    <Page>
      <Header title={project.title} backButton={true}>
        {editing ? '' : <MdEdit onClick={() => setEditing(true)} />}
      </Header>
      <section id="content">{details()}</section>
      {buttons()}
    </Page>
  );
}
export default Project;
