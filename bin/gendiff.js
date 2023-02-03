#!/usr/bin/env node
import genDiff from './index.js'
import { Command } from 'commander';
const program = new Command();
program
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
     console.log(genDiff(filepath1, filepath2,program.opts().format));
  })
program.parse();