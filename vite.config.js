import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default ({command}) => ({
        base: command === 'serve' ? '' : '/build/',
        publicDir: 'fake_dir_so_nothing_gets_copied', build: {
            manifest: true,
            outDir: 'public/build',
            rollupOptions: {
            },
        },
        css: {
            postCss: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        plugins: [
            laravel({
                input: [
                    'resources/admin/css/admin.css',
                    'resources/admin/js/admin.js',
                    'resources/front/css/front.css',
                    'resources/front/js/front.js'
                ],
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        resolve: {
            alias: {
                '@': "/resources"
            }
        }
    }
);
