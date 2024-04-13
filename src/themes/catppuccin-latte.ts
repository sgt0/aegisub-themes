import { fromBase16, mergeAegisubThemes, type Base16Palette } from './utils';

const PALETTE: Base16Palette = {
  base00: '#eff1f5',
  base01: '#e6e9ef',
  base02: '#ccd0da',
  base03: '#bcc0cc',
  base04: '#acb0be',
  base05: '#4c4f69',
  base06: '#dc8a78',
  base07: '#7287fd',
  base08: '#d20f39',
  base09: '#fe640b',
  base0A: '#df8e1d',
  base0B: '#40a02b',
  base0C: '#179299',
  base0D: '#1e66f5',
  base0E: '#8839ef',
  base0F: '#dd7878'
};

export const CATPPUCCIN_LATTE_THEME = mergeAegisubThemes(
  { name: 'Catppuccin Latte' },
  fromBase16(PALETTE),
  {
    subtitleGrid: {
      background: {
        selectedComment: '#FCB0A1',
        selection: '#FCB0A1'
      },

      // No way to make base0D work contrast-wise. This alternative is derived
      // from base07.
      header: '#B7BFFB'
    }
  }
);
