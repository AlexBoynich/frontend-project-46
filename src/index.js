import fs from 'fs';
import path from 'path';
import getDiff from './getDiff.js'
import parse from './parser.js'
import process from 'node:process';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

export const readFile = (filepath) => fs.readFileSync(filepath, 'utf8');

const genDiff = (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  const fileFormat1 = getFileFormat(filepath1);
  const fileFormat2 = getFileFormat(filepath2);
  const data1 = parse(readFile(path1));
  const data2 = parse(readFile(path2));
  const diffs = getDiff(data1, data2);
  return diffs;
}
  export default genDiff;