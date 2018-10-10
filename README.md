# file-clippy

[![npm](https://img.shields.io/npm/v/file-clippy.svg)](https://www.npmjs.com/package/file-clippy)
[![Build Status](https://travis-ci.org/pratishshr/file-clippy.svg?branch=master)](https://travis-ci.org/pratishshr/file-clippy)
[![Build status](https://ci.appveyor.com/api/projects/status/5bb97ugj75as6c9n/branch/master?svg=true)](https://ci.appveyor.com/project/pratishshr/file-clippy/branch/master)
[![npm](https://img.shields.io/npm/dt/file-clippy.svg)](https://www.npmjs.com/package/file-clippy)

> Copy file contents to clipboard.

## Installation

```bash
npm install --save file-clippy
```

```bash
yarn add file-clippy
```

## Usage

```js
import clippy from 'file-clippy';

let filepath = './someFile.txt';

clippy.copy(filepath); // Copy to clipboard
clippy.read(); // Read data from clipboard
```
