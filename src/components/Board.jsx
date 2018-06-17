import React, { Component } from 'react';

import { Player } from './Player';
import { Equalizer } from './Equalizer';
import { Sampler } from './Sampler';
import { Controls } from './Controls';

export class Board extends Component {
  palette = [
    'rgb(225, 75, 80)',
    'rgb(255, 135, 80)',
    'rgb(255, 200, 70)',
    'rgb(150, 200, 80)',
    'rgb(0, 180, 105)',
    'rgb(0, 155, 200)',
    'rgb(145, 95, 160)',
    'rgb(250, 120, 160)'
  ];

  tempos = [30, 60, 90, 120, 150];

  state = {
    playing: this.props.playing,
    currentTempo: this.tempos.indexOf(this.props.tempo),
    currentStep: 0,
    samples: { ...this.props.samples }
  };

  timer = null;

  toggleStep = (sample, step) => event => {
    this.setState(state => {
      let steps = state.samples[sample];
      let index = steps.indexOf(step);
      let nextSteps =
        index >= 0
          ? [...steps.slice(0, index), ...steps.slice(index + 1)]
          : [...steps.slice(), step];
      return {
        ...state,
        samples: {
          ...state.samples,
          [sample]: nextSteps
        }
      };
    });
  };

  startTimer = () => {
    let seconds = 60.0;
    let tempo = this.tempos[this.state.currentTempo];
    let beat = seconds / tempo;
    this.timer = setInterval(() => {
      this.setState(state => ({
        ...state,
        currentStep: (state.currentStep + 1) % this.props.resolution
      }));
    }, beat * 250);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  start = () => {
    this.setState(
      state => ({ ...state, playing: true, currentStep: 0 }),
      this.startTimer
    );
  };

  stop = () => {
    this.setState(state => ({ ...state, playing: false }), this.stopTimer);
  };

  togglePlaying = event => {
    !this.state.playing ? this.start() : this.stop();
  };

  toggleTempo = event => {
    this.setState(
      state => ({
        ...state,
        currentTempo: (state.currentTempo + 1) % this.tempos.length
      }),
      this.stop
    );
  };

  render() {
    return (
      <div>
        <Equalizer
          playing={this.state.playing}
          samples={this.state.samples}
          currentStep={this.state.currentStep}
          palette={this.palette}
        />
        <Sampler
          playing={this.state.playing}
          resolution={this.props.resolution}
          samples={this.state.samples}
          currentStep={this.state.currentStep}
          toggleStep={this.toggleStep}
          palette={this.palette}
        />
        <Player
          playing={this.state.playing}
          tempo={this.tempos[this.state.currentTempo]}
          resolution={this.props.resolution}
          bars={this.props.bar}
          samples={this.state.samples}
        />
        <Controls
          playing={this.state.playing}
          tempo={this.tempos[this.state.currentTempo]}
          resolution={this.props.resolution}
          togglePlaying={this.togglePlaying}
          toggleTempo={this.toggleTempo}
        />
      </div>
    );
  }
}
