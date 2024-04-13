import { css, useTheme } from '@emotion/react';
import chroma, { Color } from 'chroma-js';
import { AegisubTheme } from '../themes/base';

const CPS_MIN = 15;
const CPS_MAX = 30;

const styles = {
  minCell: css({ whiteSpace: 'nowrap', width: '1%' }),
  textAlignCenter: css({ textAlign: 'center' })
};

/** Blend two colors in the same way that wxWidgets does. */
function wxAlphaBlend(fg: number, bg: number, alpha: number): number {
  const result = bg + alpha * (fg - bg);
  return Math.min(Math.max(result, 0), 255);
}

/** Blend two colors in the same way that Aegisub does. */
function aegiBlend(fg: Color, bg: Color, alpha: number): Color {
  const fgRgb = fg.rgb(false);
  const bgRgb = bg.rgb(false);
  return chroma(
    wxAlphaBlend(fgRgb[0], bgRgb[0], alpha),
    wxAlphaBlend(fgRgb[1], bgRgb[1], alpha),
    wxAlphaBlend(fgRgb[2], bgRgb[2], alpha)
  );
}

type Props = React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
> & {
  cps: number;
  end: string;
  isComment?: boolean;
  isFold?: boolean;
  isInframe?: boolean;
  isSelected?: boolean;
  lineNumber: number;
  start: string;
  style: string;
  text: string;
};

export function SubtitleGridLine({
  cps,
  end,
  isComment = false,
  isFold = false,
  isInframe = false,
  isSelected = false,
  lineNumber,
  onClick,
  start,
  style,
  text
}: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;

  const backgroundColor = isSelected
    ? isComment
      ? theme.subtitleGrid.background.selectedComment
      : theme.subtitleGrid.background.selection
    : isComment
      ? theme.subtitleGrid.background.comment
      : isInframe
        ? theme.subtitleGrid.background.inframe
        : isFold
          ? theme.subtitleGrid.background.closedFold
          : theme.subtitleGrid.background.background;

  let cpsBackgroundColor = backgroundColor;
  let cpsColor = 'inherit';
  if (cps > CPS_MIN) {
    const alpha = Math.min((cps - CPS_MIN + 1) / (CPS_MAX - CPS_MIN + 1), 1);
    cpsBackgroundColor = aegiBlend(
      chroma(theme.subtitleGrid.cpsError),
      chroma(backgroundColor),
      alpha
    ).hex();
    cpsColor = aegiBlend(
      chroma('black'),
      chroma(theme.subtitleGrid.standard),
      alpha
    ).hex();
  }

  return (
    <tr css={css({ backgroundColor })} onClick={onClick}>
      <th
        css={css(styles.textAlignCenter, styles.minCell, {
          backgroundColor: theme.subtitleGrid.leftColumn
        })}
        scope="row"
      >
        {lineNumber}
      </th>
      <td css={css(styles.textAlignCenter, styles.minCell)}>{isFold && '>'}</td>
      <td css={css(styles.textAlignCenter, styles.minCell)}>{start}</td>
      <td css={css(styles.textAlignCenter, styles.minCell)}>{end}</td>
      <td
        css={css(styles.textAlignCenter, styles.minCell, {
          backgroundColor: cpsBackgroundColor,
          color: cpsColor
        })}
      >
        {cps}
      </td>
      <td css={css(styles.minCell)}>{style}</td>
      <td>{text}</td>
    </tr>
  );
}
