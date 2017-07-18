#!/usr/bin/env node

var tracery = require('tracery-grammar')
var fs = require('fs')

var grammar = JSON.parse(fs.readFileSync('grammar.json', 'utf8'))

var stories = tracery.createGrammar(grammar)

console.log(stories.flatten('#origin#'))
