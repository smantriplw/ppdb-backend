import {defineConfig} from 'tsup';

export default defineConfig({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    outDir: 'dist',
    clean: true,
    minifyWhitespace: true,
});
