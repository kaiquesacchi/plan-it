import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import TextInput from '../../components/inputs/Text';
import ProjectsService from '../../services/Projects';

import { Page } from './styles';

function NewProject() {
  const history = useHistory();

  const [project, setProject] = useState({});

  const handleChange = event => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  return (
    <Page>
      <Header title="New Project" />
      <section id="content">
        <div className="group">
          <TextInput
            className="text-input"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="group">
          <TextInput
            className="text-input"
            placeholder="Light Color"
            name="lightColor"
            onChange={handleChange}
          />
          <TextInput
            className="text-input"
            placeholder="Dark Color"
            name="darkColor"
            onChange={handleChange}
          />
        </div>
      </section>
      <section id="buttons">
        <button onClick={history.goBack}>Cancel</button>
        <button
          onClick={() => {
            ProjectsService.create(project);
            history.goBack();
          }}
        >
          Save
        </button>
      </section>
    </Page>
  );
}
export default NewProject;
