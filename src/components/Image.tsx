import { css } from '@emotion/react';

const styles = css({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontStyle: 'italic',
  height: 'auto',
  maxWidth: '100%',
  shapeMargin: '0.75rem',
  verticalAlign: 'middle'
});

export function Image(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return <img css={styles} {...props} />;
}
