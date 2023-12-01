import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json' assert { type: 'json' }
import path from 'path'

export default defineConfig({
    optimizeDeps: {
        include: ['interactjs']
    },
    plugins: [
        vue()
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.js'),
            name: 'vue-grid-layout',
            formats: ['cjs', 'umd', 'es']
        }
    }
})
