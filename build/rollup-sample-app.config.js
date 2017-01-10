import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

//paths are relative to the execution path
export default {
    entry: 'dist/sample-app/main-aot.js',
    dest: 'dist/sample-app/dist/build.js', // output a single application bundle
    sourceMap: true,
    sourceMapFile: 'dist/sample-app/dist/build.js.map',
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true, main: true}),
        commonjs({
            include: [
                'node_modules/rxjs/**'
            ],
        }),
        uglify()
    ],
    onwarn: function (message) {
        // Suppress ignore-able warning messages. See: https://github.com/rollup/rollup/issues/794
        if (/The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten./.test(message)) {
            return;
        }
        console.error(message);
    }
}