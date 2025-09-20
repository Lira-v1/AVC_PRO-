import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ВАЖНО: base = '/AVC_PRO/' — имя твоего репозитория на GitHub.
// Если переименуешь репозиторий, измени и это значение.
export default defineConfig({
  plugins: [react()],
  base: '/AVC_PRO/'
})
