import React from 'react';
import styled from 'react-emotion';

import { Bar } from './Bar';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  width: 640px;
  margin: 16px auto;
`;

export const Equalizer = ({ playing, palette, samples, currentStep }) => (
  <Container>
    {Object.entries(samples).map(([sample, steps], index) => (
      <Bar
        key={sample}
        sample={sample}
        active={playing && steps.includes(currentStep)}
        backgroundColor={palette[index]}
      />
    ))}
  </Container>
);
