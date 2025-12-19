import {
  fromBase16,
  meetContrastRatio,
  mergeAegisubThemes,
  type Base16Palette
} from './utils';

const PALETTE: Base16Palette = {
  base00: '#303446',
  base01: '#292c3c',
  base02: '#414559',
  base03: '#51576d',
  base04: '#626880',
  base05: '#c6d0f5',
  base06: '#f2d5cf',
  base07: '#babbf1',
  base08: '#e78284',
  base09: '#ef9f76',
  base0A: '#e5c890',
  base0B: '#a6d189',
  base0C: '#81c8be',
  base0D: '#8caaee',
  base0E: '#ca9ee6',
  base0F: '#eebebe'
};

const selectionBg = meetContrastRatio(PALETTE.base05, PALETTE.base0B).hex();

export const CATPPUCCIN_FRAPPE_THEME = mergeAegisubThemes(
  { name: 'Catppuccin Frappé' },
  fromBase16(PALETTE),
  {
    subtitleGrid: {
      background: {
        selectedComment: selectionBg,
        selection: selectionBg
      },
      header: meetContrastRatio(PALETTE.base05, PALETTE.base0D).hex()
    }
  }
);
