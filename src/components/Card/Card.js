import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const CardBody = styled.div`
  height: 100px;
  width: 90vw;
  border-radius: 10px;
  margin-bottom: 10px;

  h1 {
    position: relative;
    top: 1rem;
    left: 1rem;
  }
`;

function Card({ id, title, backgroundColor }) {
  const history = useHistory();

  return (
    <CardBody
      style={{ backgroundColor: backgroundColor }}
      onClick={() => history.push('/projects/info/' + id)}
    >
      <h1>{title}</h1>
    </CardBody>
  );
}
export default Card;
