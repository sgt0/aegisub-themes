import { css, useTheme } from '@emotion/react';
import type { AegisubTheme } from '../themes/base';

type Props = { x: number; y: number };

export function DrawingCoord({ x, y }: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <>
      <span css={css({ color: theme.subtitle.syntax.drawingXCoords })}>
        {x}
      </span>
      &nbsp;
      <span css={css({ color: theme.subtitle.syntax.drawingYCoords })}>
        {y}
      </span>
    </>
  );
}
