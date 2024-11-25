import { css, ThemeProvider } from '@emotion/react';
import { AegisubPreview } from '../../components/AegisubPreview';
import { CopyButton } from '../../components/CopyButton';
import { Image } from '../../components/Image';
import { THEMES } from '../../themes';
import type { AegisubTheme } from '../../themes/base';
import sectionsImg from './sections.png';

const styles = {
  h1: css({ fontFamily: 'sans-serif', fontSize: '6rem', lineHeight: 1.25 }),
  h2: css({ fontFamily: 'sans-serif', fontSize: '3rem' }),
  p: css({ marginBottom: '1rem', lineHeight: 1.5 }),
  section: css({
    fontFamily: 'sans-serif',
    fontSize: '1.25rem',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  })
};

/** Convert a theme to Aegisub configuration. */
function toAegisubConfig(theme: Omit<AegisubTheme, 'name'>) {
  // biome-ignore format: prefer keeping this close to the original JSON
  return {
    "Subtitle" : {
			"Background" : theme.subtitle.background,
			"Syntax" : {
				"Background" : {
					"Brackets" : "",
					"Comment" : "",
					"Drawing Command" : "",
					"Drawing X" : "",
					"Drawing Y" : "",
					"Error" : "rgb(255, 200, 200)",
					"Karaoke Template" : "",
					"Karaoke Variable" : "",
					"Line Break" : "",
					"Normal" : "",
					"Parameters" : "",
					"Slashes" : "",
					"Tags" : ""
				},
				"Bold" : {
					"Brackets" : false,
					"Comment" : true,
					"Drawing Command" : true,
					"Drawing X" : false,
					"Drawing Y" : false,
					"Error" : false,
					"Karaoke Template" : true,
					"Karaoke Variable" : true,
					"Line Break" : true,
					"Normal" : false,
					"Parameters" : false,
					"Slashes" : false,
					"Tags" : true
				},
				"Underline": {
					"Drawing Endpoint": true
				},
        "Brackets" : theme.subtitle.syntax.brackets,
        "Comment" : theme.subtitle.syntax.comments,
        "Drawing Command" : theme.subtitle.syntax.drawingCommands,
        "Drawing X" : theme.subtitle.syntax.drawingXCoords,
        "Drawing Y" : theme.subtitle.syntax.drawingYCoords,
				"Error" : "rgb(200, 0, 0)",
				"Karaoke Template" : "rgb(128, 0, 192)",
				"Karaoke Variable" : "rgb(128, 0, 192)",
        "Line Break" : theme.subtitle.syntax.lineBreak,
        "Normal" : theme.subtitle.syntax.normal,
        "Parameters" : theme.subtitle.syntax.parameters,
        "Slashes" : theme.subtitle.syntax.slashes,
        "Tags" : "rgb(90, 90, 90)"
			}
		},
    "Subtitle Grid" : {
			"Active Border": "rgb(45, 45, 45)",
			"Background" : {
				"Background" : theme.subtitleGrid.background.background,
				"Comment" : theme.subtitleGrid.background.comment,
				"Inframe" : theme.subtitleGrid.background.inframe,
				"Selected Comment" : theme.subtitleGrid.background.selectedComment,
				"Selection" :  theme.subtitleGrid.background.selection,
				"Open Fold" : theme.subtitleGrid.background.openFold,
				"Closed Fold" : theme.subtitleGrid.background.closedFold
			},
			"Collision": theme.subtitleGrid.collision,
			"CPS Error" : theme.subtitleGrid.cpsError,
			"Header" : theme.subtitleGrid.header,
			"Left Column" : theme.subtitleGrid.leftColumn,
			"Lines" : theme.subtitleGrid.lines,
			"Selection" : theme.subtitleGrid.selection,
			"Standard" : theme.subtitleGrid.standard
		}
  };
}

export function Page() {
  return (
    <>
      <section css={styles.section}>
        <h1 css={styles.h1}>Aegisub themes</h1>
        <p css={styles.p}>
          Collection of{' '}
          <a href="https://github.com/arch1t3cht/Aegisub" rel="nofollow">
            Aegisub
          </a>{' '}
          themes.
        </p>
        <div css={css({ display: 'flex' })}>
          <div css={css({ flexDirection: 'column' })}>
            <p>How to install a theme:</p>
            <ol>
              <li>Close all instances of Aegisub.</li>
              <li>
                Locate <code>config.json</code>. On Windows this may be in{' '}
                <code>%APPDATA%\Aegisub</code>, on Unix it may be in{' '}
                <code>~/.aegisub</code>. Portable installs will have the file in
                the same directory as the Aegisub executable.
              </li>
              <li>
                Make a backup of <code>config.json</code>, just in case
                something goes wrong or if you ever want to return to your
                current theme.
              </li>
              <li>
                Pick a theme from this page the click the respective{' '}
                <CopyButton text="" /> button to copy the theme to the
                clipboard.
              </li>
              <li>
                Open <code>config.json</code> in a text editor and look for the
                section named <code>&quot;Subtitle Grid&quot;</code> (can search
                for it with or without the double quotes). This section should
                be adjacent to one named <code>&quot;Subtitle&quot;</code>.
              </li>
              <li>
                Paste over the <code>&quot;Subtitle Grid&quot;</code> and{' '}
                <code>&quot;Subtitle&quot;</code> sections.
              </li>
              <li>
                Launch Aegisub and check out the new theme. If anything
                doesn&apos;t look right, restore from the backup.
              </li>
            </ol>
          </div>
          <Image
            css={css({
              maxHeight: '404px',
              '@media (max-width: 60em)': {
                display: 'none'
              }
            })}
            src={sectionsImg}
          />
        </div>
      </section>
      <section css={styles.section}>
        <ul css={css({ listStyle: 'none', padding: 0 })}>
          {THEMES.map((theme) => {
            const { name, ...namelessTheme } = theme;
            return (
              <li css={css({ marginBottom: '2rem' })} key={name}>
                <h2 css={styles.h2}>{name}</h2>
                <CopyButton
                  text={
                    JSON.stringify(toAegisubConfig(namelessTheme), null, '	')
                      // Strip opening and closing braces, then add trailing comma.
                      .slice(1, -1)
                      .trim() + ','
                  }
                />
                <ThemeProvider theme={namelessTheme}>
                  <AegisubPreview />
                </ThemeProvider>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
