import { defineConfig } from 'vite'
import { meteor } from 'meteor-vite/plugin';

export default defineConfig({
    plugins: [
        meteor({
          clientEntry: 'client/main.js',
          // stubValidation: {
          //   warnOnly: true,
          // },
          enableExperimentalFeatures: true, // Required to enable server bundling.
        }),
        
        // ... Other Vite plugins here. E.g. React or Vue (See examples below)
    ],
})