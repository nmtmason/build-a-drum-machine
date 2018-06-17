import React from 'react';
import styled from 'react-emotion';

import { Sample } from './Sample';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 840px;
`;

export const Sampler = ({
  playing,
  palette,
  resolution,
  samples,
  currentStep,
  toggleStep
}) => (
  <Container>
    {Object.entries(samples).map(([sample, steps], index) => (
      <Sample
        key={sample}
        playing={playing}
        sample={sample}
        steps={steps}
        resolution={[...Array(resolution).keys()]}
        currentStep={currentStep}
        toggleStep={toggleStep}
        backgroundColor={palette[index]}
      />
    ))}
  </Container>
);
