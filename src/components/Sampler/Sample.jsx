import React from 'react';
import styled from 'react-emotion';

import { Switch } from './Switch';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Heading = styled('h1')`
  display: block;
  width: 100px;
  margin: 0;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
`;

export const Sample = ({
  playing,
  resolution,
  sample,
  steps,
  currentStep,
  toggleStep,
  backgroundColor
}) => (
  <Container>
    <Heading>{sample}</Heading>
    {resolution.map(step => (
      <div>
        <Switch
          key={step}
          active={playing && step === currentStep}
          on={steps.includes(step)}
          toggleStep={toggleStep(sample, step)}
          backgroundColor={backgroundColor}
        />
      </div>
    ))}
  </Container>
);
