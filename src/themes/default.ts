import type { AegisubTheme } from './base';

export const DEFAULT_THEME: AegisubTheme = {
  name: 'Default',
  subtitle: {
    background: 'rgb(255, 255, 255)',
    syntax: {
      brackets: 'rgb(20, 50, 255)',
      comments: 'rgb(0,0,0)',
      drawingCommands: 'rgb(0,0,0)',
      drawingXCoords: 'rgb(90,40,40)',
      drawingYCoords: 'rgb(40,90,40)',
      lineBreak: 'rgb(160, 160, 160)',
      normal: 'rgb(0,0,0)',
      parameters: 'rgb(40, 90, 40)',
      slashes: 'rgb(255, 0, 200)'
    }
  },
  subtitleGrid: {
    background: {
      background: 'rgb(255,255,255)',
      closedFold: 'rgb(200, 200, 200)',
      comment: 'rgb(216, 222, 245)',
      inframe: 'rgb(255, 253, 234)',
      openFold: 'rgb(235, 235, 235)',
      selectedComment: 'rgb(211, 238, 238)',
      selection: 'rgb(206, 255, 231)'
    },
    collision: 'rgb(255,0,0)',
    cpsError: 'rgb(255,0,0)',
    header: 'rgb(165, 207, 231)',
    leftColumn: 'rgb(196, 236, 201)',
    lines: 'rgb(190,190,190)',
    selection: 'rgb(0,0,0)',
    standard: 'rgb(0,0,0)'
  }
};
