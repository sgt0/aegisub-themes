import type { DeepPartial } from '@thi.ng/api';
import chroma, { contrast, type Color } from 'chroma-js';
import { merge } from 'lodash-es';
import type { AegisubTheme } from './base';

const MAX_ITERATIONS = 100_000;

export type Base16Palette = {
  /** Default Background */
  base00: string;

  /** Lighter Background */
  base01: string;

  /** Selection Background */
  base02: string;

  /** Comments, Invisibles, Line Highlighting */
  base03: string;

  /** Dark Foreground */
  base04: string;

  /** Default Foreground, Caret, Delimiters, Operators */
  base05: string;

  /** Light Foreground */
  base06: string;

  /** The Lightest Foreground */
  base07: string;

  /** Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
  base08: string;

  /** Integers, Boolean, Constants, XML Attributes, Markup Link Url */
  base09: string;

  /** Classes, Markup Bold, Search Text Background */
  base0A: string;

  /** Strings, Inherited Class, Markup Code, Diff Inserted */
  base0B: string;

  /** Support, Regular Expressions, Escape Characters, Markup Quotes */
  base0C: string;

  /** Functions, Methods, Attribute IDs, Headings */
  base0D: string;

  /** Keywords, Storage, Selector, Markup Italic, Diff Changed */
  base0E: string;

  /** Deprecated Highlighting for Methods and Functions, Opening/Closing Embedded Language Tags */
  base0F: string;
};

export type Base24Palette = Base16Palette & {
  /** Darker Background */
  base10: string;

  /** The Darkest Background */
  base11: string;

  /** Bright Red */
  base12: string;

  /** Bright Yellow */
  base13: string;

  /** Bright Green */
  base14: string;

  /** Bright Cyan */
  base15: string;

  /** Bright Blue */
  base16: string;

  /** Bright Purple */
  base17: string;
};

/**
 * Adjusts the background color `bg` until it meets the given contrast ratio
 * with the foreground color `fg`.
 *
 * @param fg Foreground color.
 * @param bg Background color.
 * @param contrastRatio Desired contrast ratio.
 * @returns A new background color that meets the desired contrast ratio.
 */
export function meetContrastRatio(
  fg: Color | string,
  bg: Color | string,
  contrastRatio = 4.5
): Color {
  fg = chroma(fg);
  bg = chroma(bg);

  let currentContrast = 0;
  let attempts = 0;
  while ((currentContrast = contrast(fg, bg)) < contrastRatio) {
    if (attempts++ > MAX_ITERATIONS) {
      throw new RangeError('Could not find a suitable color.');
    }

    const epsilon = Math.max(
      (10 * (contrastRatio - currentContrast)) / contrastRatio / MAX_ITERATIONS,
      1 / MAX_ITERATIONS
    );
    bg =
      contrast(fg, bg.darken(epsilon)) > currentContrast
        ? bg.darken(epsilon)
        : bg.brighten(epsilon);
  }
  return bg;
}

/**
 * Converts a base16 palette into an Aegisub theme.
 *
 * @param palette Base16 palette.
 * @returns Aegisub theme.
 */
export function fromBase16(palette: Base16Palette): Omit<AegisubTheme, 'name'> {
  // const header = meetContrastRatio(chroma(base0D), chroma(base05));
  // const inframe = meetContrastRatio(chroma(base09), chroma(base05));

  return {
    subtitle: {
      background: palette.base00,
      syntax: {
        brackets: palette.base0E,
        comments: palette.base03,
        drawingCommands: palette.base0D,
        drawingXCoords: palette.base08,
        drawingYCoords: palette.base0B,
        lineBreak: palette.base06,
        normal: palette.base05,
        parameters: palette.base09,
        slashes: palette.base0C
      }
    },
    subtitleGrid: {
      background: {
        background: palette.base00,
        closedFold: palette.base01,
        comment: palette.base03,

        // Originally had base0A, but that is typically a strong color which is
        // overkill for in-frame lines because there can be multiple on screen
        // at once.
        inframe: palette.base02,
        openFold: palette.base01,

        // Selections are supposed to be base02, but I've decided to assign that
        // to in-frames. The rest of background colors are taken by the general
        // background, comments, and folds.
        selectedComment: palette.base0A,
        selection: palette.base0A
      },
      collision: palette.base05,
      cpsError: palette.base08, // base0F,
      header: palette.base0D,
      leftColumn: palette.base01,
      lines: palette.base04,
      selection: palette.base05,
      standard: palette.base05
    }
  };
}

/**
 * Converts a base24 palette into an Aegisub theme.
 *
 * @param palette Base24 palette.
 * @returns Aegisub theme.
 */
export function fromBase24(palette: Base24Palette): Omit<AegisubTheme, 'name'> {
  const orig = fromBase16(palette);
  return {
    ...orig,
    subtitleGrid: {
      ...orig.subtitleGrid,
      cpsError: palette.base12
    }
  };
}

/**
 * Type-safe merging of partial Aegisub themes.
 *
 * @param args Aegisub themes.
 * @returns Merged Aegisub theme object.
 */
export function mergeAegisubThemes(
  ...args: readonly DeepPartial<AegisubTheme>[]
): AegisubTheme {
  // @ts-expect-error
  return merge(...args);
}
