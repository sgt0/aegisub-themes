import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import { MdiCheckBold } from './MdiCheckBold';
import { MdiContentCopy } from './MdiContentCopy';

const styles = {
  button: css({
    cursor: 'pointer',
    display: 'inline-flex',
    flex: '1 1 auto',
    justifyContent: 'center',
    padding: '0 0.5rem',
    position: 'relative'
  }),
  icon: css({
    alignItems: 'center',
    display: 'inline-flex',
    height: '16px',
    width: '16px'
  }),
  label: css({ fontSize: '0.75rem', marginLeft: '0.25rem' })
};

function useClipboard(text: string): [copied: boolean, copy: () => unknown] {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => setCopied(true));
  }, [text]);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (copied) {
      timeoutId = window.setTimeout(() => setCopied(false), 1500);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [copied]);

  return [copied, copy];
}

type Props = { text: string };

export function CopyButton({ text }: Props) {
  const [copied, copy] = useClipboard(text);

  return (
    <button css={styles.button} onClick={copy} type="button">
      {copied ? (
        <MdiCheckBold css={styles.icon} />
      ) : (
        <MdiContentCopy css={styles.icon} />
      )}
      <p css={styles.label}>{copied ? 'Copied' : 'Copy Theme'}</p>
    </button>
  );
}
