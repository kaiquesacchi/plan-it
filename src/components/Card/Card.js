import React, { useState, useEffect } from 'react';
import './Card.sass';

function Card({ title, backgroundColor }) {
  return (
    <section id="component-Card" style={{ backgroundColor: backgroundColor }}>
      <h1>{title}</h1>
    </section>
  );
}
export default Card;
