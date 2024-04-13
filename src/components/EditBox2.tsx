import { css, useTheme } from '@emotion/react';
import { AegisubTheme } from '../themes/base';

type Props = { children: React.ReactNode };

export function EditBox({ children }: Props) {
  const theme: AegisubTheme = useTheme() as AegisubTheme;
  return (
    <div
      css={css({
        backgroundColor: theme.subtitle.background,

        // This border color isn't configurable. It does vary with dark mode but
        // this is good enough to at least define the edges of the edit box.
        border: `1px solid #646464`,
        color: theme.subtitle.syntax.normal,
        cursor: 'text',
        height: '3em',
        width: '100%'
      })}
    >
      {children}
    </div>
  );
}
