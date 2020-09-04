#!/usr/bin/env node

const program = require("commander");
const packageConfig = require("../package.json");
const chalk = require("chalk");
const setupCommands = require("./commands");

program.version(packageConfig.version);

setupCommands(program);

program.parse(process.argv);
