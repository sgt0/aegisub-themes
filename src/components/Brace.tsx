import { css, useTheme } from '@emotion/react';
import { ReactNode } from 'react';
import { AegisubTheme } from '../themes/base';

type Props = { children: ReactNode };

export function Brace({ children }: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <span css={css({ color: theme.subtitle.syntax.brackets })}>{children}</span>
  );
}
