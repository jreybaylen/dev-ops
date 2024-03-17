import { defineConfig } from 'vite'
import ReactSWC from '@vitejs/plugin-react-swc'
import ModuleFederation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    ReactSWC(),
    ModuleFederation({
      name: 'remote-app',
      filename: 'remote-entry.js',
      exposes: {
        './ButtonBase': './src/components/Button/Base'
      },
      shared: [ 'react', 'react-dom' ]
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
  }
})
