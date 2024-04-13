import {
  fromBase16,
  meetContrastRatio,
  mergeAegisubThemes,
  type Base16Palette
} from './utils';

const PALETTE: Base16Palette = {
  base00: '#0f0f0f',
  base01: '#191919',
  base02: '#262626',
  base03: '#4c4c4c',
  base04: '#ac8a8c',
  base05: '#cacaca',
  base06: '#e7e7e7',
  base07: '#f0f0f0',
  base08: '#ac8a8c',
  base09: '#ceb188',
  base0A: '#aca98a',
  base0B: '#8aac8b',
  base0C: '#8aabac',
  base0D: '#8f8aac',
  base0E: '#ac8aac',
  base0F: '#ac8a8c'
};

const selectionBg = meetContrastRatio(PALETTE.base05, PALETTE.base0B).hex();

export const MOUNTAIN_THEME = mergeAegisubThemes(
  { name: 'Mountain' },
  fromBase16(PALETTE),
  {
    subtitleGrid: {
      background: {
        comment: meetContrastRatio(PALETTE.base05, PALETTE.base03).hex(),
        inframe: meetContrastRatio(PALETTE.base05, PALETTE.base0E).hex(),
        selectedComment: selectionBg,
        selection: selectionBg
      },
      header: meetContrastRatio(PALETTE.base05, PALETTE.base0D).hex()
    }
  }
);
