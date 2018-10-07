/*  
 * When we do an "npm run build" without having a src folder we get
 * ERROR in Entry module not found: Error: Can 't resolve './src' in
 * '/home/sam/Desktop/Js/Traversy/Web-pack'
 * 
 * This is because by default webpack4 has defined its entry point to
 * be in the src/index.js
 * 
 * When we add a an src folder...the build is done successfully and a
 * bundled dist/ folder is generated with a main.js.
 *  
 * Also we get to define out production modes by adding them to
 * package.json and including the --mode
 * 
 * When the --mode production the main.js bundle gets minified while in
 * dev mode it is not.
 * 
 * We can also override the default entry point and output by explicitly defining a path.
 */

console.log("Hello Webpack");
/*  
 * To render the ES6 function below we can either use the .babelrc
 * config or just specify --module-bind js=babel-loader in the
 * package.json.
 */
const arr = [1, 2, 3];
const ES6Fun = () => console.log(...arr);
ES6Fun()
window.ES6Fun = ES6Fun;