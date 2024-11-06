import { css, useTheme } from '@emotion/react';
import type { ReactNode } from 'react';
import type { AegisubTheme } from '../themes/base';

type Props = { children: ReactNode };

export function DrawingCommand({ children }: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <strong css={css({ color: theme.subtitle.syntax.drawingCommands })}>
      {children}
    </strong>
  );
}
