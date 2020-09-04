#!/usr/bin/env node

const program = require('commander')
const package = require('../package.json')

program.version(package.version)

program
        .command('add [todo]')
        .description('Adds a todo')
        .action(todo => {
                console.log(todo)
        })

program.parse(process.argv)
