import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 640px;
  margin: 16px auto;
  border-bottom: 2px solid rgb(255, 255, 255);
`;

const Text = styled('p')`
  margin: 0;
  padding: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.85rem;
  cursor: ${props => props.cursor || 'auto'};
`;

export const Controls = ({
  playing,
  tempo,
  resolution,
  togglePlaying,
  toggleTempo
}) => (
  <Container>
    <Text cursor="pointer" onClick={togglePlaying}>
      {!playing ? '➤ Play' : '❘❘ Pause'}
    </Text>
    <div
      className={css`
        display: flex;
      `}
    >
      <Text cursor="pointer" onClick={toggleTempo}>{`Tempo: ${tempo}`}</Text>
      <Text>{`Resolution: ${resolution}`}</Text>
    </div>
  </Container>
);
