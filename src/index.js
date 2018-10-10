import * as clipboard from './clipboard';

/**
 * Copy file contents to clipboard.
 *
 * @param {string} filename
 * @returns {Promise}
 */
async function copy(filename) {
  return clipboard.copy(filename);
}

/**
 * Returns content from clipboard.
 *
 * @returns {Promise}
 */
function read() {
  return clipboard.read();
}

export default {
  copy,
  read
};
