const fs = require('fs');
const postcss = require('postcss');
const atNx = require('./build/index');

const input = fs.readFileSync('input.css', 'utf8');

const output = postcss()
  .use(atNx())
  .process(input)
  .then(result => console.log(result.css));

console.log(output);