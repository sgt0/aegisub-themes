import { css, useTheme } from '@emotion/react';
import type { AegisubTheme } from '../themes/base';
import type { SubtitleLine } from '../types';
import { SubtitleGridLine } from './SubtitleGridLine';

const textAlignCenter = css({ textAlign: 'center' });

type Props = {
  lines: readonly SubtitleLine[];
  onLineSelect: (i: number) => unknown;
  selectedLine: number;
};

export function SubtitleGrid({ lines, onLineSelect, selectedLine }: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <table
      css={css({
        '*': {
          border: `1px solid ${theme.subtitleGrid.lines}`,
          paddingLeft: '4px',
          paddingRight: '4px'
        },

        backgroundColor: theme.subtitleGrid.background.background,
        border: `1px solid ${theme.subtitleGrid.lines}`,
        borderCollapse: 'collapse',
        color: theme.subtitleGrid.standard,
        cursor: 'default',
        th: {
          fontWeight: 'normal'
        },
        userSelect: 'none',
        width: '100%'
      })}
    >
      <thead css={css({ backgroundColor: theme.subtitleGrid.header })}>
        <tr>
          <th css={textAlignCenter} scope="col">
            #
          </th>
          <th css={textAlignCenter} scope="col">
            &gt;
          </th>
          <th css={textAlignCenter} scope="col">
            Start
          </th>
          <th css={textAlignCenter} scope="col">
            End
          </th>
          <th css={textAlignCenter} scope="col">
            CPS
          </th>
          <th scope="col">Style</th>
          <th scope="col">Text</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, i) => (
          <SubtitleGridLine
            cps={line.cps}
            end={line.end}
            isComment={!!line.isComment}
            isFold={!!line.isFold}
            isInframe={!!line.isInframe}
            isSelected={i === selectedLine}
            // biome-ignore lint/suspicious/noArrayIndexKey: wontfix
            key={i}
            lineNumber={i + 1}
            onClick={() => onLineSelect(i)}
            start={line.start}
            style={line.style}
            text={line.preview}
          />
        ))}
      </tbody>
    </table>
  );
}
