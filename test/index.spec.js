import { expect } from 'chai';

import clippy from '../src';

const FILE_DATA = 'COPY ME!';
const FILE_PATH = './test/sample.txt';

describe('clippy', () => {
  describe('copy', () => {
    it('should copy file contents to clipboard', async () => {
      await clippy.copy(FILE_PATH);

      expect(await clippy.read()).to.equal(FILE_DATA);
    });
  });

  describe('read', () => {
    it('should read contents from the clipboard', async () => {
      await clippy.copy(FILE_PATH);

      expect(await clippy.read()).to.equal(FILE_DATA);
    });
  });
});
