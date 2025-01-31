import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";

const pluginOptions = {
  env: ".env",
  example: ".env.example",
  transformMode: "compile-time",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ImportMetaEnvPlugin.vite(pluginOptions)
  ],
})
