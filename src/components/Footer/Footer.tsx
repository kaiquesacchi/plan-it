import React from 'react';

import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const Body = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
  height: 60px;
  width: 90vw;

  span {
    padding: 0.5rem;

    &.active {
      color: ${props => props.theme.colorActive}
    }
  }

  .active {
    font-weight: 800;
    border-bottom: 4px dotted;
  }
`;

interface Props {
  active: string
}

function Footer({ active }: Props) {
  const history = useHistory();

  const className = (name: string) => (name === active ? 'active' : '');
  const onClick = (route: string) => {
    if (route !== active) history.replace('/' + route);
  };

  return (
    <>
      <Body>
        <span className={className('General')} onClick={() => onClick('General')}>
          General
        </span>
        <span className={className('Projects')} onClick={() => onClick('Projects')}>
          Projects
        </span>
        <span className={className('Settings')} onClick={() => onClick('Settings')}>
          Settings
        </span>
      </Body>
      <div style={{height: '60px'}}></div>
    </>
  );
}
export default Footer;
