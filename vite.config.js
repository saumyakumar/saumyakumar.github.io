import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: '/' because this deploys to saumyakumar.github.io (a root-domain Pages
// site) rather than a project page under /<repo-name>/.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
