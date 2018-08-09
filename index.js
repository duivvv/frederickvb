#!/usr/bin/env node

const puns = require('./puns.js');
console.log(puns[Math.floor(Math.random() * puns.length)]);
