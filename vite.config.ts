import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';
import { cjsInterop } from 'vite-plugin-cjs-interop';

const config: UserConfig = {
  base: '/aegisub-themes/',
  plugins: [
    cjsInterop({ dependencies: ['@mdi/react', 'chroma-js'] }),
    react(),
    vike({ prerender: true })
  ]
};

export default config;
