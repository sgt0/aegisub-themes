import {
  fromBase16,
  meetContrastRatio,
  mergeAegisubThemes,
  type Base16Palette
} from './utils';

const PALETTE: Base16Palette = {
  base00: '#151718',
  base01: '#282a2b',
  base02: '#3B758C',
  base03: '#41535B',
  base04: '#43a5d5',
  base05: '#d6d6d6',
  base06: '#eeeeee',
  base07: '#ffffff',
  base08: '#Cd3f45',
  base09: '#db7b55',
  base0A: '#e6cd69',
  base0B: '#9fca56',
  base0C: '#55dbbe',
  base0D: '#55b5db',
  base0E: '#a074c4',
  base0F: '#8a553f'
};

const selectionBg = meetContrastRatio(PALETTE.base05, PALETTE.base0B).hex();

export const SETI_THEME = mergeAegisubThemes(
  { name: 'Seti' },
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
