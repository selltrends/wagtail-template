import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const { resolve } = require('path');

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: '/static/',
    server: {
        host: 'localhost',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': resolve('./static')
        }
    },
    build: {
        outDir: resolve('./assets'),
        assetsDir: '',
        manifest: "manifest.json",
        emptyOutDir: true,
        target: 'es2015',
        rollupOptions: {
            input: {
                main: resolve('./static/js/main.js'),
            },
            output: {
                chunkFileNames: undefined,
            },
        },
    },
})
