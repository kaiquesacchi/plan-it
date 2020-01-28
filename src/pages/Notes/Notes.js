import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import BasicFocusBlock from '../../components/focusBlocks/Basic';

import ProjectsService from '../../services/Projects';

import { Page, TextArea, UnclickableText } from './styles';
import { GoPlus } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';

function Notes() {
  const history = useHistory();

  const { id } = useParams();
  const project = ProjectsService.get(parseInt(id));

  const [notes, setNotes] = useState(project.notes);

  // Add note __________________________________________________________
  const add = () => setNotes([...notes, '']);

  // Edit note _________________________________________________________
  const onChange = (value, index) => {
    let newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
  };
  const save = () => {
    ProjectsService.update(id, { notes: notes });
  };

  // Remove note _______________________________________________________
  const [removing, setRemoving] = useState(false);
  const [removingList, setRemovingList] = useState([]);
  const remove = () => {
    let newNotesList = [...notes];
    let indexesToBeRemoved = [...removingList].sort((a, b) => a - b);
    while (indexesToBeRemoved.length) {
      newNotesList.splice(indexesToBeRemoved.pop(), 1);
    }
    ProjectsService.update(id, { notes: newNotesList });
    setNotes(newNotesList);
  };
  const closeRemoving = () => {
    setRemovingList([]);
    setRemoving(false);
  };
  const toggleList = (noteIndex, checked) => {
    if (checked) setRemovingList([...removingList, noteIndex]);
    else {
      const indexOnList = removingList.indexOf(noteIndex);
      let newList = [...removingList];
      newList.splice(indexOnList, 1);
      setRemovingList([...newList]);
    }
  };

  // Footer ____________________________________________________________
  const footer = () => {
    if (removing) {
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
    }
    return (
      <footer>
        <button onClick={history.goBack}>Cancel</button>
        <button onClick={save}>Save</button>
      </footer>
    );
  };

  return (
    <Page>
      <Header title="Notes" backButton>
        <GoPlus onClick={add} />
        {removing ? '' : <AiOutlineDelete onClick={() => setRemoving(true)} />}
      </Header>
      <section id="content">
        {notes.map((note, index) => {
          return (
            <BasicFocusBlock
              key={index}
              selecting={removing}
              callback={checked => toggleList(index, checked)}
            >
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
      {footer()}
    </Page>
  );
}
export default Notes;
