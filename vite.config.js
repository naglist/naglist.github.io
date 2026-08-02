import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
console.log("VITE CONFIG LOADED")

const __dirname = fileURLToPath(new URL('.', import.meta.url))


export default defineConfig({

  base: '/',

  build: {

    rollupOptions: {

      input: {

        main: resolve(__dirname, 'index.html'),

        export: resolve(__dirname, 'x.html')

      }

    }

  }

})