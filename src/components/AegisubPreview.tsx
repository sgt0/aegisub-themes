import { css } from '@emotion/react';
import { useState } from 'react';
import type { SubtitleLine } from '../types';
import { Brace } from './Brace';
import { Comment } from './Comment';
import { DrawingCommand } from './DrawingCommand';
import { DrawingCoord } from './DrawingCoord';
import { EditBox } from './EditBox2';
import { LineBreak } from './LineBreak';
import { Parameter } from './Parameter';
import { Punctuation } from './Punctuation';
import { SubtitleGrid } from './SubtitleGrid';

const SAMPLE_LINES: readonly SubtitleLine[] = [
  {
    isComment: true,
    start: '0:00:05.00',
    end: '0:00:08.00',
    cps: 6,
    style: 'Default',
    preview: 'This is a comment line',
    content: 'This is a comment line'
  },
  {
    start: '0:00:00.00',
    end: '0:00:05.00',
    cps: 7,
    style: 'Default',
    preview: 'The quick brown fox\\Njumps over the lazy dog☀',
    content: (
      <>
        The quick brown fox
        <LineBreak />
        jumps over the lazy dog
        <Brace>{'{'}</Brace>
        <Comment>1234567890</Comment>
        <Brace>{'}'}</Brace>
      </>
    )
  },
  {
    start: '0:00:00.00',
    end: '0:00:05.00',
    cps: 12,
    style: 'Signs',
    preview: '☀m 0 0 l 492 0 492 176 0 176',

    // I know this looks bad but are we really gonna implement a new ASS parser
    // just to syntax highlight a couple static samples? No.

    // {\\pos(966,72)\\c&HDFDDD4&\\blur2\\p1}m 0 0 l 492 0 492 176 0 176
    content: (
      <>
        <Brace>{'{'}</Brace>
        <Punctuation>\</Punctuation>
        <Comment>pos</Comment>
        <Punctuation>(</Punctuation>
        <Parameter>966</Parameter>
        <Punctuation>,</Punctuation>
        <Parameter>72</Parameter>
        <Punctuation>)</Punctuation>
        <Punctuation>\</Punctuation>
        <Comment>c</Comment>
        <Parameter>&HDFDDD4&</Parameter>
        <Punctuation>\</Punctuation>
        <Comment>blur</Comment>
        <Parameter>2</Parameter>
        <Punctuation>\</Punctuation>
        <Comment>p</Comment>
        <Parameter>1</Parameter>
        <Brace>{'}'}</Brace>
        <DrawingCommand>m</DrawingCommand>
        &nbsp;
        <DrawingCoord x={0} y={0} />
        &nbsp;
        <DrawingCommand>l</DrawingCommand>
        &nbsp;
        <DrawingCoord x={492} y={0} />
        &nbsp;
        <DrawingCoord x={492} y={176} />
        &nbsp;
        <DrawingCoord x={0} y={176} />
      </>
    )
  },
  {
    isInframe: true,
    start: '0:00:00.00',
    end: '0:00:05.00',
    cps: 12,
    style: 'Default',
    preview: 'This line is currently in-frame.',
    content: 'This line is currently in-frame.'
  },
  {
    isFold: true,
    start: '0:00:00.00',
    end: '0:00:05.00',
    cps: 12,
    style: 'Default',
    preview: 'This is a fold.',
    content: 'This is a fold.'
  },
  {
    start: '0:00:10.00',
    end: '0:00:11.50',
    cps: 21,
    style: 'Default',
    preview: 'Lorem ipsum dolor sit amet, consectetur.',
    content: 'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    start: '0:00:11.30',
    end: '0:00:13.10',
    cps: 16,
    style: 'Default',
    preview: 'Sed ut perspiciatis unde omnis iste.',
    content: 'Sed ut perspiciatis unde omnis iste.'
  }
];

const styles = css({
  fontFamily: 'Tahoma, Verdana, sans-serif',
  fontSize: '16px'
});

export function AegisubPreview() {
  const [selectedLine, selectLine] = useState<number>(1);

  return (
    <div css={styles}>
      <EditBox>{SAMPLE_LINES[selectedLine]?.content}</EditBox>
      <SubtitleGrid
        lines={SAMPLE_LINES}
        onLineSelect={selectLine}
        selectedLine={selectedLine}
      />
    </div>
  );
}
