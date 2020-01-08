import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NewProject.sass';

import TextInput from '../../components/inputs/Text';
import ProjectsService from '../../services/Projects';

function NewProject() {
  const history = useHistory();

  const [project, setProject] = useState({});

  const handleChange = event => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  return (
    <div id="page-NewProject" className="outerBackground">
      <section id="content" className="innerBackground">
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
        <button className="active" onClick={history.goBack}>
          Cancel
        </button>
        <button
          className="active"
          onClick={() => {
            ProjectsService.create(project);
            history.goBack();
          }}
        >
          Save
        </button>
      </section>
    </div>
  );
}
export default NewProject;
