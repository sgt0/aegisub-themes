import {
  fromBase16,
  meetContrastRatio,
  mergeAegisubThemes,
  type Base16Palette
} from './utils';

const PALETTE: Base16Palette = {
  base00: '#fdf6e3',
  base01: '#eee8d5',
  base02: '#93a1a1',
  base03: '#839496',
  base04: '#657b83',
  base05: '#586e75',
  base06: '#073642',
  base07: '#002b36',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};

const selectionBg = meetContrastRatio(PALETTE.base05, PALETTE.base0B).hex();

export const SOLARIZED_LIGHT_THEME = mergeAegisubThemes(
  { name: 'Solarized Light' },
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
