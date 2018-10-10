import fs from 'fs';

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
