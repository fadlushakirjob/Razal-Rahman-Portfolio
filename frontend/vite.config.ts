import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from the root appenv file
const envPath = path.resolve(__dirname, '../appenv')
const envConfig = dotenv.config({ path: envPath }).parsed || {}

// Map VITE_ variables to process.env and import.meta.env
const defineEnv = Object.keys(envConfig).reduce((acc: any, key) => {
  if (key.startsWith('VITE_')) {
    acc[`import.meta.env.${key}`] = JSON.stringify(envConfig[key])
  }
  return acc
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: defineEnv,
})
