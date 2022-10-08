import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parser from '../src/js/parser.js';
import genOutput from '../src/js/formatters/index.js';
import genStylishOutput from '../src/js/formatters/stylish.js';
import genPlainOutput from '../src/js/formatters/plain.js';
import readFiles from '../src/js/reader.js';
import genJsonOutput from '../src/js/formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');