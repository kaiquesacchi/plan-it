import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import BasicFocusBlock from '../../components/focusBlocks/Basic';

import ProjectsService from '../../services/Projects';

import { Page, BlockContent } from './styles';
import { GoPlus } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';

function IncomeAndExpenses() {
  const history = useHistory();

  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));

  const [IAE, setIAE] = useState(project.incomeAndExpenses);

  const [removing, setRemoving] = useState(false);
  const [removingList, setRemovingList] = useState([]);
  const closeRemoving = () => {
    setRemovingList([]);
    setRemoving(false);
  };
  const toggleList = (IAEIndex, checked) => {
    if (checked) setRemovingList([...removingList, IAEIndex]);
    else {
      const indexOnList = removingList.indexOf(IAEIndex);
      let newList = [...removingList];
      newList.splice(indexOnList, 1);
      setRemovingList([...newList]);
    }
  };
  const remove = () => {
    let newIAEList = [...IAE];
    let indexesToBeRemoved = [...removingList].sort((a, b) => a - b);
    while (indexesToBeRemoved.length) {
      newIAEList.splice(indexesToBeRemoved.pop(), 1);
    }
    ProjectsService.update(id, { incomeAndExpenses: newIAEList });
    setIAE(newIAEList);
  };

  const footer = () => {
    if (!removing) return '';
    return (
      <footer>
        <button onClick={closeRemoving}>Cancel</button>
        <button
          onClick={() => {
            remove();
            closeRemoving();
          }}
        >
          Remove
        </button>
      </footer>
    );
  };

  return (
    <Page>
      <Header title="Income and Expenses" backButton>
        <GoPlus onClick={() => history.push(`/projects/incomeAndExpenses/new/${id}`)} />
        {removing ? '' : <AiOutlineDelete onClick={() => setRemoving(true)} />}
      </Header>
      <section id="content">
        {IAE.map((element, index) => {
          return (
            <BasicFocusBlock
              key={index}
              selecting={removing}
              callback={checked => toggleList(index, checked)}
            >
              <BlockContent
                onClick={() => {
                  if (removing) return;
                  history.push(`/projects/incomeAndExpenses/edit/${id}/${index}`);
                }}
              >
                <span>{element.title}</span>
                <span style={{ color: element.value > 0 ? 'green' : 'red' }}>
                  {element.value}
                </span>
              </BlockContent>
            </BasicFocusBlock>
          );
        })}
      </section>
      {footer()}
    </Page>
  );
}
export default IncomeAndExpenses;
