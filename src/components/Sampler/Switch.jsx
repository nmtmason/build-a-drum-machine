import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 4px;
  background-color: ${props =>
    props.active ? 'rgb(100, 100, 100)' : 'rgb(75, 75, 75)'};
`;

const Toggle = styled('div')`
  position: absolute;
  width: ${props => (props.active ? '80%' : '50%')};
  height: ${props => (props.active ? '80%' : '50%')};
  background-color: ${props =>
    props.on ? props.backgroundColor : 'transparent'};
  transition: width 0.1s, height 0.1s;
`;

export const Switch = ({ active, on, toggleStep, backgroundColor }) => (
  <Container onClick={toggleStep} active={active}>
    <Toggle active={active} on={on} backgroundColor={backgroundColor} />
  </Container>
);
