import React from 'react';
import { Song, Sequencer, Sampler } from 'react-music';

export const Player = ({ playing, tempo, resolution, bars, samples }) => (
  <Song playing={playing} tempo={tempo}>
    <Sequencer resolution={resolution} bars={bars}>
      {Object.entries(samples).map(([sample, steps]) => (
        <Sampler key={sample} sample={`sounds/${sample}.wav`} steps={steps} />
      ))}
    </Sequencer>
  </Song>
);
