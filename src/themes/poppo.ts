import type { AegisubTheme } from './base';

export const POPPO_THEME: AegisubTheme = {
  name: 'Poppo',
  subtitle: {
    background: 'rgb(33, 33, 33)',
    syntax: {
      brackets: 'rgb(118, 143, 255)',
      comments: 'rgb(141, 141, 141)',
      drawingCommands: 'rgb(0, 0, 0)',
      drawingXCoords: 'rgb(90, 40, 40)',
      drawingYCoords: 'rgb(40, 90, 40)',
      lineBreak: 'rgb(110, 118, 129)',
      normal: 'rgb(190, 190, 190)',
      parameters: 'rgb(146, 222, 145)',
      slashes: 'rgb(255, 174, 238)'
    }
  },
  subtitleGrid: {
    background: {
      background: 'rgb(45, 45, 45)',
      closedFold: 'rgb(72, 79, 88)',
      comment: 'rgb(32, 28, 39)',
      inframe: 'rgb(79, 79, 79)',
      openFold: 'rgb(72, 79, 88)',
      selectedComment: 'rgb(85, 48, 152)',
      selection: 'rgb(133, 110, 167)'
    },
    collision: 'rgb(190, 190, 190)',
    cpsError: 'rgb(255,0,0)',
    header: 'rgb(49, 102, 132)',
    leftColumn: 'rgb(85, 109, 88)',
    lines: 'rgb(0, 0, 0)',
    selection: 'rgb(190, 190, 190)',
    standard: 'rgb(190, 190, 190)'
  }
};
