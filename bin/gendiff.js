#!/usr/bin/env node
import gendiff from '../index.js'
import { Command } from 'commander';


const program = new Command();
program
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(findDiff(filepath1, filepath2, options.format));
  });
program.parse();