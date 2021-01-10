import 'module-alias/register';
import path from 'path';

import { handler } from '../packages/lambda-a/src';
import lambdaLocal = require('lambda-local');

// const callA = async () =>
//   await lambdaLocal.execute({
//     lambdaPath: path.join(__dirname, '../packages/lambda-a/src/index'),
//     lambdaHandler: 'handler',
//     envfile: path.join(__dirname, '.env-local'),
//     event: {},
//   });

const callA = async () => handler({});

callA()
  .then((result) => console.log({ result }))
  .catch((err) => console.log({ err }));
