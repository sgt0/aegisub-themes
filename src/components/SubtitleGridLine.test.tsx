// @vitest-environment happy-dom

import { createSerializer } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { DEFAULT_THEME } from '../themes/default';
import { SubtitleGridLine } from './SubtitleGridLine';

expect.addSnapshotSerializer(createSerializer());

test('comment line', () => {
  expect(
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <table>
          <tbody>
            <SubtitleGridLine
              cps={6}
              end={'0:00:08.00'}
              isComment={true}
              lineNumber={1}
              start={'0:00:05.00'}
              style={'Default'}
              text={'This is a comment line'}
            />
          </tbody>
        </table>
      </ThemeProvider>
    ).asFragment()
  ).toMatchSnapshot();
});
