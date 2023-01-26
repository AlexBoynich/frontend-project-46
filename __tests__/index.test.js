import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const outputPlain = readFileSync('__fixtures__/correct_output', 'utf8');
const outputTree = readFileSync('__fixtures__/correct_output_complex', 'utf8');
const outputList = readFileSync('__fixtures__/correct_output_plain', 'utf8');
const outputJson = readFileSync('__fixtures__/correct_output_json.json', 'utf8');

describe('stringify format', () => {
  const formatType = 'stylish';
  test('gendiff for .json', () => {
    const path1 = 'file1.json';
    const path2 = 'file2.json';
    expect(genDiff(path1, path2, formatType)).toEqual(outputPlain);
  });
  test('gendiff for .yml', () => {
    const path1 = 'file1.yml';
    const path2 = 'file2.yml';
    expect(genDiff(path1, path2, formatType)).toEqual(outputPlain);
  });
  test('gendiff for tree .json', () => {
    const path1 = 'file1.tree.json';
    const path2 = 'file2.tree.json';
    expect(genDiff(path1, path2, formatType)).toEqual(outputTree);
  });
});

test('gendiff for tree .json, plain format', () => {
  const path1 = 'file1.tree.json';
  const path2 = 'file2.tree.json';
  const formatType = 'plain';
  expect(genDiff(path1, path2, formatType)).toEqual(outputList);
});

test('gendiff for tree .json, json format', () => {
  const path1 = 'file1.tree.json';
  const path2 = 'file2.tree.json';
  const formatType = 'json';
  expect(genDiff(path1, path2, formatType)).toEqual(outputJson);
});