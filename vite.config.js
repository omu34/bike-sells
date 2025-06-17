// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//     root: './',
//     base: '/assets/',
//     build: {
//         outDir: 'assets',
//         assetsDir: '',
//         emptyOutDir: false,
//         manifest: false,
//         rollupOptions: {
//             input: {
//                 main: path.resolve(__dirname, 'src/js/main.js'),
//             },
//             output: {
//                 entryFileNames: '[name].js',
//                 chunkFileNames: '[name].js',
//                 assetFileNames: (assetInfo) => {
//                     if (assetInfo.name && assetInfo.name.endsWith('.css')) {
//                         return '[name].css';
//                     }
//                     if (assetInfo.name && /\.(woff2?|ttf|eot|svg)$/.test(assetInfo.name)) {
//                         return '[name][extname]';
//                     }
//                     return '[name][extname]';
//                 },
//             },
//         },
//     },
// });


import { resolve } from 'path'

export default {
    root: './',
    build: {
        assetsInclude: ['**/*.woff2', '**/*.ttf'],
        build: {

        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/js/main.js')
            },
            output: {
                dir: 'assets',
                entryFileNames: 'main.js',
                assetFileNames: 'main.css'
            },
            external: ['bell-mt.woff2', 'bell-mt.ttf'],

        },
        emptyOutDir: false,
    },
    css: {
        postcss: './postcss.config.js',
    },
}