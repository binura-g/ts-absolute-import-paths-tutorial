// const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require('tsconfig-paths');

const baseUrl = './'; // Either absolute or relative path. If relative it's resolved to current working directory.
const cleanup = tsConfigPaths.register({
  baseUrl: '/Users/sive/Documents/Playground/Typescript/ts-absolute-import-paths-tutorial/packages/lambda-a',
  paths: { 'src/*': ['/dist/*'] },
});

// When path registration is no longer needed
cleanup();
