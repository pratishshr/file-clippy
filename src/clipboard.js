import util from 'util';
import { exec } from 'child_process';

const execute = util.promisify(exec);

let commands = {
  copy: {
    darwin: filename => `pbcopy < ${filename}`,
    linux: filename => `xclip ${filename}`,
    win32: filename => `type ${filename} | clip`
  },
  read: {
    darwin: () => 'pbpaste',
    linux: () => 'xclip -o -sel clip',
    win32: () => 'paste | command'
  }
};

function getPlatform() {
  return process.platform;
}

/**
 * Copy file contents to clipboard.
 *
 * @param {string} filename
 * @returns {Promise}
 */
export async function copy(filename) {
  try {
    let platform = getPlatform();
    let func = commands.copy[platform] || commands.copy('linux');
    let command = func(filename);

    await execute(command);
  } catch (err) {
    throw new Error(err.stderr);
  }
}

/**
 * Read data from clipboard.
 *
 * @returns {Promise}
 */
export async function read() {
  try {
    let platform = getPlatform();
    let func = commands.read[platform] || commands.read['linux'];
    let command = func();
    let { stdout } = await execute(command);

    return stdout;
  } catch (err) {
    throw new Error(err.stderr);
  }
}
