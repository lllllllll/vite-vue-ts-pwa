import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [vue(), WindiCSS(), VitePWA({
    mode: 'development',
    srcDir: 'src',
    filename: 'sw.ts',
    base: '/',
    strategies: 'injectManifest',
    includeAssets: ['/logo128.png'],
    manifest: {
      name: 'PWA Inject Manifest',
      short_name: 'PWA Inject',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/logo192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/logo512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/logo512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  })]
})
