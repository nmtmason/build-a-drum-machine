# [Build a Random Quote Machine](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd

## Solution

- Built using [React](https://reactjs.org/) and [create-react-app](https://github.com/facebook/create-react-app).
- The [react-music](https://github.com/FormidableLabs/react-music) library provides the backbone for the drum machine.
- Inspired by [this dribble](https://dribbble.com/shots/3169399-Drummy-Drum-Machine-for-Mac).
- Samples are taken from [Wes Bos - JavaScript Drum Kit](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)
- The `Board` component provides the entry point to the application.
- It holds state about samples, timings and the currently playing audio.
- These information is passed down to the following components:
  1.  `Equalizer` - a visualization of the current samples.
  2.  `Sampler` - Samples and when they're played.
  3.  `Controls` - Play / pause and tempo options.
  4.  `Player` - The `react-music` components required to play the audio.
