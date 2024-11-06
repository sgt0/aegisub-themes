import { expect, test } from 'vitest';
import { meetContrastRatio } from './utils';

test('meet contrast ratio', () => {
  const CASES = [
    { fg: '#4C4F69', bg: '#DC8A78', expected: '#FFAF9B' /* #FCB0A1 */ },
    { fg: '#E6E1CF', bg: '#59C2FF', expected: '#006AA0' /* #2D6A8D */ },
    { fg: '#E6E1CF', bg: '#FFB454', expected: '#915700' /* #855C28 */ },
    { fg: '#5C6773', bg: '#36A3D9', expected: '#93F2FF' }
  ];

  for (const { bg, expected, fg } of CASES) {
    expect(meetContrastRatio(fg, bg).hex().toUpperCase()).toStrictEqual(
      expected.toUpperCase()
    );
  }
});
