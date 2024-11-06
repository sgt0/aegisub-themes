import { css, useTheme } from '@emotion/react';
import type { AegisubTheme } from '../themes/base';

export function LineBreak() {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <strong css={css({ color: theme.subtitle.syntax.lineBreak })}>\N</strong>
  );
}
