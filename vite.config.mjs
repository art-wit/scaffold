import { defineConfig } from 'vite';
import { meteor } from 'meteor-vite/plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    meteor({
      clientEntry: 'imports/ui/main.js',
      stubValidation: {
        warnOnly: true,
      },
      enableExperimentalFeatures: true, // Required to enable server bundling.
    }),
    svelte({
      configFile: 'svelte.config.mjs',
      /* plugin options */
    }),
    /**
     * meteor npm run build
     * cd output/svelte/bundle/programs/server && npm install
     * For more details see here: ../output/svelte/bundle/programs/web.browser/app/vite
     */
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      emitFile: true,
      template: 'sunburst',
    }),
  ],
});
