import path from 'path';
import fs from 'fs';

import { ROOT_DIR } from './constants';

export function generatePackageJson() {
  const pkg = fs.readFileSync(path.join(ROOT_DIR, 'package.json'));

  const parsed = JSON.parse(pkg.toString()) as Record<string, any>;

  delete parsed.scripts;
  delete parsed.devDependencies;
  delete parsed.files;
  delete parsed.resolutions;
  delete parsed['lint-staged'];
  delete parsed.packageManager;

  parsed.type = 'module';

  return parsed;
}
