import { css, Global } from '@emotion/react';
import { StrictMode } from 'react';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    background-color: #f0f0f0;
    line-height: 1.15;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #202020;
      color: #f0f0f0;
    }
  }

  #page-view {
    isolation: isolate;
  }

  a,
  a:visited {
    color: #0074d9;
  }
`;

type Props = { children: React.ReactNode };

export function Layout({ children }: Props) {
  return (
    <StrictMode>
      <Global styles={globalStyles} />
      <main>{children}</main>
    </StrictMode>
  );
}
