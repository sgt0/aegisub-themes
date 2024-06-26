import { fromBase24, mergeAegisubThemes, type Base24Palette } from './utils';

const PALETTE: Base24Palette = {
  base00: '#21222c',
  base01: '#282a36',
  base02: '#3A3C4E',
  base03: '#4D4F68',
  base04: '#626483',
  base05: '#E9E9F4',
  base06: '#f8f8f2',
  base07: '#ffffff',
  base08: '#ff5555',
  base09: '#f1fa8c',
  base0A: '#EBFF87',
  base0B: '#50fa7b',
  base0C: '#8be9fd',
  base0D: '#bd93f9',
  base0E: '#ff79c6',
  base0F: '#00F769',
  base10: '#1D1D26',
  base11: '#1B1B23',
  base12: '#ff6e6e',
  base13: '#ffffa5',
  base14: '#69ff94',
  base15: '#a4ffff',
  base16: '#d6acff',
  base17: '#ff92df'
};

export const DRACULA_THEME = mergeAegisubThemes(
  { name: 'Dracula' },
  fromBase24(PALETTE),
  {
    subtitleGrid: {
      background: {
        closedFold: '#37414d',
        inframe: '#3e3545',
        openFold: '#37414d',
        selectedComment: '#405e42',
        selection: '#405e42'
      },
      header: '#715696'
    }
  }
);
