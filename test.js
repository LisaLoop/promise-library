'use strict';
const bindingPath = require.resolve(`./build/Release/binding`);
const binding = require(bindingPath);
console.log('binding.hello() =', binding.hello("something"));
