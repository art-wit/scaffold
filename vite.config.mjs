import { defineConfig } from 'vite'
import { meteor } from 'meteor-vite/plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        meteor({
          clientEntry: 'client/main.js',
          // stubValidation: {
          //   warnOnly: true,
          // },
          enableExperimentalFeatures: true, // Required to enable server bundling.
        }),
        svelte({
          /* plugin options */
        })
    ],
})