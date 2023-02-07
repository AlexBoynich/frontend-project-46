#!/usr/bin/env node
import gendiff from '../index.js'
import { Command } from 'commander';


const program = new Command();
program
  .name('gendiff')
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(gendiff(filepath1, filepath2, options.format));
  });
program.parse();