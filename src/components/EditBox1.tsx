// This is the initial subtitle edit box implementation that parsed the subtitle
// text with highlight.js and highlightjs-ass. However this did not quite match
// how Aegisub styles symbols such as braces, parentheses, line breaks, etc.
// There are hacks below to accommodate some of this but in the end there are
// too many differences to work around.

import { css } from '@emotion/react';
import hljs from 'highlight.js/lib/core';
import hljsAss from 'highlightjs-ass';
import { AegisubTheme } from '../themes/base';

hljs.registerLanguage('ass', hljsAss);

type Props = {
  text: string;
  theme: AegisubTheme;
};

export function EditBox({ text, theme }: Props) {
  let highlighted = hljs.highlight(text, { language: 'ass' }).value;

  // HACK: Style brackets, parentheses, and slashes manually. Parentheses and
  // slashes share the same style so it's fine that they get the same classes.
  highlighted = highlighted
    .replaceAll('\\', '<span class="slash">\\</span>')
    .replaceAll('(', '<span class="slash">(</span>')
    .replaceAll(')', '<span class="slash">)</span>')
    .replaceAll('{', '<span class="bracket">{</span>')
    .replaceAll('}', '<span class="bracket">}</span>');

  return (
    <div
      css={css({
        '.bracket': {
          color: theme.subtitle.syntax.brackets
        },
        '.hljs-built_in': {
          color: theme.subtitle.syntax.drawingCommands
        },
        '.hljs-link': {
          color: theme.subtitle.syntax.drawingXCoords
        },
        '.hljs-literal': {
          // HACK: not all literals are line breaks, but for the purposes of the
          // examples this is fine.
          color: theme.subtitle.syntax.lineBreak
        },
        '.hljs-number, .hljs-string .hljs-literal, .hljs-string .hljs-literals':
          {
            color: theme.subtitle.syntax.parameters
          },
        '.hljs-string': {
          color: theme.subtitle.syntax.comments
        },
        '.hljs-title': {
          fontWeight: 'bold'
        },
        '.slash': {
          color: theme.subtitle.syntax.slashes
        },
        backgroundColor: theme.subtitle.background,

        // This border color isn't configurable. It does vary with dark mode but
        // this is good enough to at least define the edges of the edit box.
        border: `1px solid #646464`,
        color: theme.subtitle.syntax.normal,
        cursor: 'text',
        height: '3em',
        width: '100%'
      })}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
}
