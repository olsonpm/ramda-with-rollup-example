import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  plugins: [
    nodeResolve()
    , uglify({
      compress: {
        passes: 3
        , toplevel: true
        , side_effects: true
      }
      , output: {
        beautify: true
      }
    })
  ],
  format: 'es'
};
