import { css, useTheme } from '@emotion/react';
import type { ReactNode } from 'react';
import type { AegisubTheme } from '../themes/base';

type Props = { children: ReactNode };

export function Parameter({ children }: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <span css={css({ color: theme.subtitle.syntax.parameters })}>
      {children}
    </span>
  );
}
