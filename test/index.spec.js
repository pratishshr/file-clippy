// Sample Tests

import { expect } from 'chai';
import clipboardy from 'clipboardy';

import { copy } from '../src';
import * as file from '../src/file';

describe('copy', () => {
  it('should copy file contents to clipboard', async () => {
    const FILE_PATH = './README.md';

    let fileContents = await file.getContents(FILE_PATH);

    await copy(FILE_PATH);
    expect(clipboardy.readSync()).to.equal(fileContents);
  });
});
