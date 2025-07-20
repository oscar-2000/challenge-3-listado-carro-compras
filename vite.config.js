import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
      '@assets': path.resolve(__dirname,'./src/assets'),
      '@context': path.resolve(__dirname,'./src/assets/context'),
      '@styles': path.resolve(__dirname,'./src/assets/styles'),
      '@lib': path.resolve(__dirname,'./src/assets/lib'),
      '@ui': path.resolve(__dirname,'./src/assets/ui'),
      '@components': path.resolve(__dirname,'./src/assets/components'),
      '@img': path.resolve(__dirname,'./public/img')
    }
  }
})
