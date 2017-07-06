#!/usr/bin/env node

var tracery = require('tracery-grammar')
var grammar = require('grammar')

var grammar = tracery.createGrammar()

console.log(grammar.flatten('#origin#'))
