import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set to '/' when ggboys.org custom domain is live;
  // keep as '/gary-birthday/' for GitHub Pages subdirectory hosting.
  base: '/gary-birthday/',
})
