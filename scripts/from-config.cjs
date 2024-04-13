// Given an existing Aegisub configuration, generates a theme that can be placed
// in `src/themes/`.
//
// Usage:
//
//   node scripts/from-config.cjs /path/to/config.json

// @ts-check

const { argv } = require('node:process');
const { readFileSync } = require('node:fs');

/** @type {import('./default_config.json')} */
const { Colour } = JSON.parse(readFileSync(argv[2], 'utf8'));

const subtitle = Colour.Subtitle;
const subtitleGrid = Colour['Subtitle Grid'];

/** @type {import('../src/themes/base').AegisubTheme} */
const converted = {
  name: 'NewTheme',
  subtitle: {
    background: subtitle.Background,
    syntax: {
      brackets: subtitle.Syntax.Brackets,
      comments: subtitle.Syntax.Comment,
      drawingCommands: subtitle.Syntax['Drawing Command'],
      drawingXCoords: subtitle.Syntax['Drawing X'],
      drawingYCoords: subtitle.Syntax['Drawing Y'],
      lineBreak: subtitle.Syntax['Line Break'],
      normal: subtitle.Syntax.Normal,
      parameters: subtitle.Syntax.Parameters,
      slashes: subtitle.Syntax.Slashes
    }
  },
  subtitleGrid: {
    background: {
      background: subtitleGrid.Background.Background,
      closedFold: subtitleGrid.Background['Closed Fold'],
      comment: subtitleGrid.Background.Comment,
      inframe: subtitleGrid.Background.Inframe,
      openFold: subtitleGrid.Background['Open Fold'],
      selectedComment: subtitleGrid.Background['Selected Comment'],
      selection: subtitleGrid.Background.Selection
    },
    collision: subtitleGrid.Collision,
    cpsError: subtitleGrid['CPS Error'],
    header: subtitleGrid.Header,
    leftColumn: subtitleGrid['Left Column'],
    lines: subtitleGrid.Lines,
    selection: subtitleGrid.Selection,
    standard: subtitleGrid.Standard
  }
};

console.log(`import type { AegisubTheme } from './base';

export const NEW_THEME: AegisubTheme = ${JSON.stringify(converted, null, 2)};
`);
