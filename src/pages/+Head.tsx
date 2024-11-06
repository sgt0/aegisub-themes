import favicon from './favicon.svg';

export function Head() {
  return (
    <>
      <meta content="width=device-width" name="viewport" />
      <link href={favicon} rel="icon" type="image/svg+xml" />
      <meta content="Aegisub themes" property="og:title" />
      <meta content="Collection of Aegisub themes." property="og:description" />
      <meta content="Collection of Aegisub themes." name="description" />
    </>
  );
}
