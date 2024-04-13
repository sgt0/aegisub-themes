/// <reference types="vite/client" />

import type { ReactNode } from 'react';

export type SubtitleLine = {
  content: ReactNode;
  cps: number;
  end: string;
  isComment?: boolean;
  isFold?: boolean;
  isInframe?: boolean;
  preview: string;
  start: string;
  style: string;
};
