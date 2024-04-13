import {
  fromBase16,
  meetContrastRatio,
  mergeAegisubThemes,
  type Base16Palette
} from './utils';

const PALETTE: Base16Palette = {
  base00: '#feedf3',
  base01: '#f8e2e7',
  base02: '#e0ccd1',
  base03: '#755f64',
  base04: '#665055',
  base05: '#564448',
  base06: '#42383a',
  base07: '#33292b',
  base08: '#df2d52',
  base09: '#f6661e',
  base0A: '#c29461',
  base0B: '#2e916d',
  base0C: '#1d8991',
  base0D: '#006e93',
  base0E: '#5e2180',
  base0F: '#ba0d35'
};

const selectionBg = meetContrastRatio(PALETTE.base05, PALETTE.base0B).hex();

export const SAKURA_THEME = mergeAegisubThemes(
  { name: 'Sakura' },
  fromBase16(PALETTE),
  {
    subtitleGrid: {
      background: {
        comment: meetContrastRatio(PALETTE.base05, PALETTE.base03).hex(),
        selectedComment: selectionBg,
        selection: selectionBg
      },
      header: meetContrastRatio(PALETTE.base05, PALETTE.base0D).hex()
    }
  }
);
