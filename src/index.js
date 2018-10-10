import clipboardy from 'clipboardy';

import * as file from './file';

export async function copy(filename) {
  let data = await file.getContents(filename);

  return clipboardy.write(data);
}
