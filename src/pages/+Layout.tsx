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

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  html {
    color: #f0f0f0;
  }

  @media (prefers-color-scheme: dark) {
    body::before {
      background-color: #202020;
      content: '';
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100vw;
      z-index: -1;
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
