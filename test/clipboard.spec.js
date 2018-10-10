import { expect } from 'chai';

import * as clipboard from '../src/clipboard';

const FILE_DATA = 'COPY ME!';
const FILE_PATH = './test/sample.txt';

describe('clipboard', () => {
  it('should copy and read string from clipboard', async () => {
    await clipboard.copy(FILE_PATH);

    expect(await clipboard.read()).to.equal(FILE_DATA);
  });
});
