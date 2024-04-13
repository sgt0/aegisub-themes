import { expect, test } from 'vitest';
import { meetContrastRatio } from './utils';

test('meet contrast ratio', () => {
  const CASES = [
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    { fg: '#4C4F69', bg: '#DC8A78', expected: '#FFAF9A' /* #FCB0A1 */ },
    { fg: '#E6E1CF', bg: '#59C2FF', expected: '#006AA0' /* #2D6A8D */ },
    { fg: '#E6E1CF', bg: '#FFB454', expected: '#905700' /* #855C28 */ },
    { fg: '#5C6773', bg: '#36A3D9', expected: '#94F2FF' }
    /* eslint-enable sort-keys-fix/sort-keys-fix */
  ];

  for (const { bg, expected, fg } of CASES) {
    expect(meetContrastRatio(fg, bg).hex().toUpperCase()).toStrictEqual(
      expected.toUpperCase()
    );
  }
});
