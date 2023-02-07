import fs from 'fs';
import path from 'path';
import getDiff from './getDiff.js';
import parse from './parser.js';
import getFormatting from './formatters/index.js';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  const fileFormat1 = getFileFormat(filepath1);
  const fileFormat2 = getFileFormat(filepath2);
  const data1 = parse(fs.readFileSync(path1, 'utf8'), fileFormat1);
  const data2 = parse(fs.readFileSync(path2, 'utf8'), fileFormat2);
  const diffs = getDiff(data1, data2);
  const formattedDiffs = getFormatting(diffs, formatName);
  return formattedDiffs;
};
export default gendiff;
