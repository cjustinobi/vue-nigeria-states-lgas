import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

export default {
    input: 'src/plugin.js', // Path relative to package.json
    output: {
        name: 'NaijaStatesLgas',
        exports: 'named',
    },
    plugins: [
        json(),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
            extensions: [".js", ".json"],
            preferBuiltins: false,  // Default: true
        }),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
};