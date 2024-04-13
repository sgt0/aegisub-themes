# aegisub-themes

Collection of [Aegisub](https://github.com/arch1t3cht/Aegisub) themes.

## Local development

Requires at least Node.js v20.12.2 and npm v10.5.2.

```bash
$ npm ci
$ npm start
```

A development version of the site will then be available at <http://localhost:3000>.

## Adding a theme

Themes are defined in `src/themes/`, and there are three types:

1. [Base16](https://github.com/tinted-theming/home/blob/main/styling.md) themes (e.g. Ayu, Catppuccin, and Sakura).
2. [Base24](https://github.com/tinted-theming/base24/blob/master/styling.md) themes (e.g. Dracula).
3. Other themes (eg. Default and Poppo).

When contributing a new theme, it can help to start from a copy of one of the
existing themes. So if adding a Base16 theme, copy an existing one like
`sakura.ts`. For Base24, `dracula.ts`. Or start from `default.ts` if there isn't
an existing Base16 or Base24 palette out there for the new theme.

1. The filename should be kebab-case and end in `.ts`.
2. The name of the exported constant should be SCREAMING_SNAKE_CASE.
3. The new constant must be added to the `THEMES` array in `src/themes/index.ts`.

There are some optional functions in `src/themes/utils.ts` that can be used to
help write themes:

- `meetContrastRatio()` accepts a foreground color and a background color and
  returns a new background color that contrasts well with the foreground color.
  This can be a handy way of making background colors out of colors that weren't
  suitable for it.
- `fromBase16()` converts a Base16 palette into an Aegisub theme.
- `fromBase24()` converts a Base24 palette into an Aegisub theme.

The [chroma.js](https://gka.github.io/chroma.js/) package is also available for
use.

### Converting an existing Aegisub config

An existing Aegisub configuration can be converted into a full theme via a
script:

```bash
$ node scripts/from-config.cjs /path/to/config.json
```

Output:

```typescript
import type { AegisubTheme } from './base';

export const NEW_THEME: AegisubTheme = {
  "name": "NewTheme",
  "subtitle": {
    "background": "rgb(255, 255, 255)",
    // ...
```
