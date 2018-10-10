import { expect } from 'chai';

import * as file from '../src/file';

const FILE_DATA = 'COPY ME!';
const FILE_PATH = './test/sample.txt';

describe('filasdfe', () => {
  describe('getContents', () => {
    it('should return contents of the file.', async () => {
      let data = await file.getContents(FILE_PATH);

      expect(data).to.equal(FILE_DATA);
    });
  });
});
