import React from 'react';
import { useParams } from 'react-router-dom';

function Project() {
  const { id } = useParams();
  return <h1>Project Page - ID: {id}</h1>;
}
export default Project;
