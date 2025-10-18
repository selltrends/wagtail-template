import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
const { resolve } = require('path');

export default defineConfig({
    plugins: [
        tailwindcss(),
        viteStaticCopy({
            targets: [
                {
                    src: resolve(__dirname, 'static/images/**/*'),
                    dest: 'images',
                },
            ],
        }),
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
