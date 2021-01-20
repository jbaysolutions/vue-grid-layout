import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

export default {
    input: 'src/components/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.unpkg,
            format: 'umd',
            name: 'bundle'
        }
    ],
    plugins: [
        vue(),
        nodeResolve(),
        commonjs(),
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: 'es2015'
        }),
        postcss({
            plugins: [require('autoprefixer')]
        }),
        terser(),
    ],
    external: ['vue']
}
