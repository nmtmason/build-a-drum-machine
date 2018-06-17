import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  width: 72px;
  margin: 4px;
  background-color: rgb(75, 75, 75);
`;

const Fill = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: ${props => (props.active ? '100%' : '33.33%')};
  padding: 4px;
  background-color: ${props => props.backgroundColor};
  transition: height 0.1s;
`;

const Text = styled('p')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 4px 0;
  border-bottom: 2px solid rgb(255, 255, 255);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const Bar = ({ sample, active, backgroundColor }) => (
  <Container>
    <Fill active={active} backgroundColor={backgroundColor}>
      <Text>{sample}</Text>
    </Fill>
  </Container>
);
