import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import BasicFocusBlock from '../../components/focusBlocks/Basic';

import ProjectsService from '../../services/Projects';

import { Page, TextArea, UnclickableText } from './styles';
import { GoPlus } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';

function Notes() {
  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));
  const [notes, setNotes] = useState(project.notes);

  const history = useHistory();

  const onChange = (value, index) => {
    let newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
  };

  const save = () => {
    console.log(notes);
    ProjectsService.update(id, { notes: notes });
  };

  const add = () => setNotes([...notes, '']);

  const [removing, setRemoving] = useState(false);

  return (
    <Page>
      <Header title="Notes" backButton>
        <GoPlus onClick={add} />
        <AiOutlineDelete onClick={() => setRemoving(!removing)} />
      </Header>
      <section id="content">
        {notes.map((note, index) => {
          return (
            <BasicFocusBlock key={index} selecting={removing}>
              {removing ? (
                <UnclickableText>{note}</UnclickableText>
              ) : (
                <TextArea
                  type="text"
                  onChange={event => onChange(event.target.value, index)}
                  value={note}
                />
              )}
            </BasicFocusBlock>
          );
        })}
      </section>
      <div style={{ height: '60px' }} />
      <footer>
        <button onClick={history.goBack}>Cancel</button>
        <button onClick={save}>Save</button>
      </footer>
    </Page>
  );
}
export default Notes;
