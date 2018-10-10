import clipboardy from 'clipboardy';

import * as file from './file';

/**
 * Copy file contents to clipboard.
 *
 * @param {string} filename
 * @returns {Promise}
 */
async function copy(filename) {
  let data = await file.getContents(filename);

  return clipboardy.write(data);
}

/**
 * Returns content from clipboard.
 *
 * @returns {Promise}
 */
function read() {
  return clipboardy.read();
}

export default {
  copy,
  read
};
