#!/usr/bin/env node
import gendiff from '../index.js'
import { Command } from 'commander';
const program = new Command();
program
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
     console.log(gendiff(filepath1, filepath2, program.opts().format));
  })
program.parse();
program.name(gendiff());