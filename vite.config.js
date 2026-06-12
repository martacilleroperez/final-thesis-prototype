import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/final-thesis-prototype/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        control: resolve(__dirname, 'control.html'),
        freedom: resolve(__dirname, 'freedom.html'),
      },
    },
  },
})