import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import TextInput from '../../components/inputs/Text';
import ProjectsService from '../../services/Projects';

import { Page } from './styles';

function NewIncomeAndExpenses() {
  const history = useHistory();

  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));

  const [newIAE, setNewIAE] = useState({});

  const handleChange = event => {
    setNewIAE({ ...newIAE, [event.target.name]: event.target.value });
  };

  const save = () => {
    let IAE = { ...newIAE };
    IAE.value = parseFloat(newIAE.value);
    ProjectsService.update(id, {
      incomeAndExpenses: [...project.incomeAndExpenses, IAE]
    });
  };

  return (
    <Page>
      <Header title="New Income or Expense " />
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
            placeholder="Value"
            name="value"
            onChange={handleChange}
          />
        </div>
      </section>
      <div style={{ height: '60px' }} />
      <section id="buttons">
        <button onClick={history.goBack}>Cancel</button>
        <button
          onClick={() => {
            save();
            history.goBack();
          }}
        >
          Create
        </button>
      </section>
    </Page>
  );
}
export default NewIncomeAndExpenses;
