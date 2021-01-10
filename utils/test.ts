import 'module-alias/register';
import path from 'path';

import moduleAlias from 'module-alias';
import { handler } from '../packages/lambda-a/src';
import lambdaLocal = require('lambda-local');

console.log('hello');

console.log(path.join(__dirname, '../packages/lambda-a/dist'));

moduleAlias.addAlias('src', '/Users/sive/Documents/Playground/Typescript/ts-absolute-import-paths-tutorial/packages/lambda-a/dist');

// moduleAlias({ base: '/Users/sive/Documents/Playground/Typescript/ts-absolute-import-paths-tutorial/packages/lambda-a' });

moduleAlias.addAlias('src', (fromPath, request, alias) => {
  console.log('HERE!!!!!!');
  if (fromPath.startsWith(__dirname + '/others')) return __dirname + '/others';
  return __dirname + '/src';
});

const callA = async () =>
  await lambdaLocal.execute({
    lambdaPath: path.join(__dirname, '../packages/lambda-a/src/index'),
    lambdaHandler: 'handler',
    envfile: path.join(__dirname, '.env-local'),
    event: {},
  });

// const callA = async () => handler({});

callA()
  .then((result) => console.log({ bla: result }))
  .catch((err) => console.log({ bla: err }));
