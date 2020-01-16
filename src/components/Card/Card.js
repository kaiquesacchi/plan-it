import React from 'react';

import styled from 'styled-components';

const CardBody = styled.div`
  height: 100px;
  width: 90vw;
  border-radius: 10px;

  h1 {
    position: relative;
    top: 1rem;
    left: 1rem;
  }
`;

function Card({ title, backgroundColor, onClick }) {
  return (
    <CardBody style={{ backgroundColor: backgroundColor }} onClick={onClick}>
      <h1>{title}</h1>
    </CardBody>
  );
}
export default Card;
