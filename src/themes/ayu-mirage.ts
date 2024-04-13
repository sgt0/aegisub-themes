import { fromBase16, mergeAegisubThemes, type Base16Palette } from './utils';

const PALETTE: Base16Palette = {
  base00: '#171B24',
  base01: '#1F2430',
  base02: '#242936',
  base03: '#707A8C',
  base04: '#8A9199',
  base05: '#CCCAC2',
  base06: '#D9D7CE',
  base07: '#F3F4F5',
  base08: '#F28779',
  base09: '#FFAD66',
  base0A: '#FFD173',
  base0B: '#D5FF80',
  base0C: '#95E6CB',
  base0D: '#5CCFE6',
  base0E: '#D4BFFF',
  base0F: '#F29E74'
};

export const AYU_MIRAGE_THEME = mergeAegisubThemes(
  { name: 'Ayu Mirage' },
  fromBase16(PALETTE),
  {
    subtitleGrid: {
      background: {
        closedFold: '#252c3e',
        openFold: '#252c3e',
        selectedComment: '#67532A',
        selection: '#67532A'
      },
      header: '#225660'
    }
  }
);
