import path from 'path';
import { fsExtra } from '@umijs/utils';
import { generatePackageJson } from './utils';
import { ROOT_DIR, LIB_DIR } from './constants';

(async () => {
  const parsed = generatePackageJson();
  const stringified = JSON.stringify(parsed, null, 2);

  await fsExtra.writeFile(
    path.join(LIB_DIR, 'README.md'),
    await fsExtra.readFile(path.join(ROOT_DIR, 'README.md')),
  );

  await fsExtra.writeFile(
    path.join(LIB_DIR, 'LICENSE'),
    await fsExtra.readFile(path.join(ROOT_DIR, 'LICENSE')),
  );

  await fsExtra.writeFile(path.join(LIB_DIR, 'package.json'), stringified);
})();
