import React from 'react';
import { useHistory } from 'react-router-dom';

import './Card.sass';

function Card({ id, title, backgroundColor }) {
  const history = useHistory();

  return (
    <div
      id="component-Card"
      style={{ backgroundColor: backgroundColor }}
      onClick={() => history.push('/projects/info/' + id)}
    >
      <h1>{title}</h1>
    </div>
  );
}
export default Card;
