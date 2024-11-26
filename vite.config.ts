import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue()
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: `${__dirname}/src/assets/favicon.ico`,
          dest: `${__dirname}/dist/`
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
