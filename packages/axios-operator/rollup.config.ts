/**
 * @format
 * @Author: Alvin
 * @Date 2020-01-07
 * @Last modified by: Alvin
 * @Last modified time: 2020-01-07
 */

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { uglify } from "rollup-plugin-uglify"

const pkg = require('./package.json');


export default {
    input: pkg.entry,
    output: [
        { file: pkg.main, name: camelCase(pkg.name), format: 'umd', sourcemap: false },
    ],
    external: [],
    watch: {
        include: './src/**',
    },
    plugins: [
        json(),
        // Compile TypeScript files
        typescript({ useTsconfigDeclarationDir: true }),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),
        // UglifyJS is a JavaScript parser, minifier, compressor and beautifier toolkit
        uglify(),
    ],
}
