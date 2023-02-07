import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const outputPlain = readFileSync('__fixtures__/correct_output.txt', 'utf8');
const outputTree = readFileSync('__fixtures__/correct_output_complex.txt', 'utf8');
const outputList = readFileSync('__fixtures__/correct_output_plain.yml', 'utf8');
const outputJson = readFileSync('__fixtures__/correct_output_json.json', 'utf8');

  test('gendiff for .json', () => {
    const path1 = '__fixtures__/file1.json';
    const path2 = '__fixtures__/file2.json';
    expect(genDiff(path1, path2, 'stylish')).toEqual(outputPlain);
  });
  test('gendiff for .yml', () => {
    const path1 = '__fixtures__/file1.yml';
    const path2 = '__fixtures__/file2.yml';
    expect(genDiff(path1, path2, 'stylish')).toEqual(outputPlain);
  });
  test('gendiff for tree .json', () => {
    const path1 = '__fixtures__/file1complex.json';
    const path2 = '__fixtures__/file2complex.json';
    expect(genDiff(path1, path2, 'stylish')).toEqual(outputTree);
  });

test('gendiff for tree .json, plain format', () => {
  const path1 = '__fixtures__/file1complex.json';
  const path2 = '__fixtures__/file2complex.json';
  expect(genDiff(path1, path2, 'plain')).toEqual(outputList);
});

test('gendiff for tree .json, json format', () => {
  const path1 = '__fixtures__/file1complex.json';
  const path2 = '__fixtures__/file2complex.json';
  expect(genDiff(path1, path2, 'json')).toEqual(outputJson);
});
