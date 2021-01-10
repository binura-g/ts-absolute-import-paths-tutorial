import path from 'path';
import lambdaLocal = require('lambda-local');

// const moduleAlias = require('/Users/sive/Documents/Playground/Typescript/ts-absolute-import-paths-tutorial/packages/lambda-a/node_modules/module-alias');

// moduleAlias.addAlias('src', '/Users/sive/Documents/Playground/Typescript/ts-absolute-import-paths-tutorial/packages/lambda-a/dist');

const callA = async () =>
  await lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../packages/lambda-a/src/index'),
    lambdaHandler: 'handler',
    envfile: path.join(__dirname, '.env-local'),
    event: {},
  });

callA()
  .then((result) => console.log({ bla: result }))
  .catch((err) => console.log({ bla: err }));
