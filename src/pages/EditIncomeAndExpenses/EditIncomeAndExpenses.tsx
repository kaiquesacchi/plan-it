import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import TextInput from '../../components/inputs/Text';
import ProjectsService from '../../services/Projects';

import { Page } from './styles';

function EditIncomeAndExpenses() {
  const history = useHistory();

  const params: { [index: string]: any } = useParams();
  const id = parseInt(params.id as string);
  const index = parseInt(params.index as string);

  const project = ProjectsService.get(id);

  const initialValues = project.incomeAndExpenses[index];
  const [IAE, setIAE] = useState(initialValues);

  const handleChange = (event: any) => {
    setIAE({ ...IAE, [event.target.name]: event.target.value });
  };

  const save = () => {
    let IAEList = [...project.incomeAndExpenses];
    IAEList[index] = IAE;
    ProjectsService.update(id, {
      incomeAndExpenses: IAEList
    });
  };

  return (
    <Page>
      <Header title={initialValues.title} />
      <section id="content">
        <div className="group">
          <TextInput
            className="text-input"
            placeholder={`Title (${initialValues.title})`}
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="group">
          <TextInput
            className="text-input"
            placeholder={`Value (${initialValues.value})`}
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
          Edit
        </button>
      </section>
    </Page>
  );
}
export default EditIncomeAndExpenses;
