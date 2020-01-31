import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import BasicFocusBlock from '../../components/focusBlocks/Basic';

import ProjectsService from '../../services/Projects';

import { Page, BlockContent } from './styles';
import { GoPlus } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';

function IncomeAndExpenses() {
  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));

  const [IAE] = useState(project.incomeAndExpenses);

  return (
    <Page>
      <Header title="Income and Expenses" backButton>
        <GoPlus />
        <AiOutlineDelete />
      </Header>
      <section id="content">
        {IAE.map((element, index) => {
          return (
            <BasicFocusBlock key={index} selecting={false} callback={() => {}}>
              <BlockContent>
                <span>{element.title}</span>
                <span style={{ color: element.value > 0 ? 'green' : 'red' }}>
                  {element.value}
                </span>
              </BlockContent>
            </BasicFocusBlock>
          );
        })}
      </section>
    </Page>
  );
}
export default IncomeAndExpenses;
