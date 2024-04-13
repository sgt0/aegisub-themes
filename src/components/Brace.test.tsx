// @vitest-environment happy-dom

import { createSerializer } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { DEFAULT_THEME } from '../themes/default';
import { Brace } from './Brace';

expect.addSnapshotSerializer(createSerializer());

test('Brace', () => {
  expect(
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Brace>{'{'}</Brace>
      </ThemeProvider>
    ).asFragment()
  ).toMatchInlineSnapshot(`
    <DocumentFragment>
      .emotion-0 {
      color: rgb(20, 50, 255);
    }

    <span
        class="emotion-0"
      >
        {
      </span>
    </DocumentFragment>
  `);
});
