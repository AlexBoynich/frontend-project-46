import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parse from '../src/parser.js';
import { readFile } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('emptyMassive', () => {
    const rightDiffs = `{
- follow: false,
  host: hexlet.io,
- proxy: 123.234.53.22,
- timeout: 50
+ timeout: 20,
+ verbose: true
}`;
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(rightDiffs);
})