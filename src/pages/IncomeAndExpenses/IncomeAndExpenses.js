import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ThemeContext from '../../themes/context';

import Header from '../../components/Header';

import ProjectsService from '../../services/Projects';

import { Page } from './styles';
import { GoPlus } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';

function IncomeAndExpenses() {
  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));
  const theme = useContext(ThemeContext);
  console.log(project, theme);

  return (
    <Page>
      <Header title="Income and Expenses" backButton>
        <GoPlus />
        <AiOutlineDelete />
      </Header>
      <section id="content">
        <ul className="group">
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </section>
    </Page>
  );
}
export default IncomeAndExpenses;
