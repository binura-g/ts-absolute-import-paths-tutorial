/**
 * Example Repository for
 * Typescript/Node: Setting up Absolute Import Paths 
 * and Live-Reloading Tutorial
 * 
 * Link: https://bgxcode.com/posts/typescript/ts-absolute-import-paths
 */
import 'module-alias/register';
import 'source-map-support/register';

import { User } from '@common/user';
import { Post } from '@common/post';
import Server from '@server/server';

new User();
new Post();
new Server().doSomething();
