import { defineConfig } from 'vite'
import ReactSWC from '@vitejs/plugin-react-swc'
import ModuleFederation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    ReactSWC(),
    ModuleFederation({
      name: 'features-app',
      remotes: {
        '@feature-x': 'http://localhost:2024/assets/remote-entry.js'
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
