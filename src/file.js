import fs from 'fs';

/**
 * Returns contents of a file.
 *
 * @param {string} filename
 * @returns {Promise}
 */
export function getContents(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, async (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data.toString());
    });
  });
}
