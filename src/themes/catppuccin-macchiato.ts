import {
  fromBase16,
  meetContrastRatio,
  mergeAegisubThemes,
  type Base16Palette
} from './utils';

const PALETTE: Base16Palette = {
  base00: '#24273a',
  base01: '#1e2030',
  base02: '#363a4f',
  base03: '#494d64',
  base04: '#5b6078',
  base05: '#cad3f5',
  base06: '#f4dbd6',
  base07: '#b7bdf8',
  base08: '#ed8796',
  base09: '#f5a97f',
  base0A: '#eed49f',
  base0B: '#a6da95',
  base0C: '#8bd5ca',
  base0D: '#8aadf4',
  base0E: '#c6a0f6',
  base0F: '#f0c6c6'
};

const selectionBg = meetContrastRatio(PALETTE.base05, PALETTE.base0B).hex();

export const CATPPUCCIN_MACCHIATO_THEME = mergeAegisubThemes(
  { name: 'Catppuccin Macchiato' },
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
