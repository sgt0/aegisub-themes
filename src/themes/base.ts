export type AegisubTheme = {
  name: string;
  subtitle: {
    background: string;
    syntax: {
      brackets: string;
      comments: string;
      drawingCommands: string;
      drawingXCoords: string;
      drawingYCoords: string;
      lineBreak: string;
      normal: string;
      parameters: string;

      /** Slashes and Parentheses. */
      slashes: string;
    };
  };
  subtitleGrid: {
    background: {
      background: string;
      closedFold: string;
      comment: string;
      inframe: string;
      openFold: string;
      selectedComment: string;
      selection: string;
    };

    /** Collision foreground. */
    collision: string;
    cpsError: string;
    header: string;
    leftColumn: string;
    lines: string;

    /** Selection foreground. */
    selection: string;

    /** Standard foreground. */
    standard: string;
  };
};
